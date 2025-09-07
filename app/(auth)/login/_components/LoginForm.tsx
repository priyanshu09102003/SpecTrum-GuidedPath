"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { GithubIcon, Loader, Loader2, Send } from 'lucide-react'
import React, { useState, useTransition } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/logo.png'
import { authClient } from '@/lib/auth-client'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'

const LoginForm = () => {

    const router = useRouter()
  const [githubPending , startGithubTransition] = useTransition();
  const [emailTransition , startEmailTransition] = useTransition();


  //Keep a track of the user's email

  const[email , setEmail] = useState('')
  
  async function signInWithGithub() {
   startGithubTransition(async() => {
     await authClient.signIn.social({
      provider: 'github',
      callbackURL: "/",
      fetchOptions: {
        onSuccess: () => {
          toast.success('Signed in with GitHub, you will be redirected...')
        },

        onError: (error) => {
          toast.error("Internal Server Error")
        }
      }
    })
   })
  }

  function signInWithEmail() {
        startEmailTransition(async() => {
            await authClient.emailOtp.sendVerificationOtp({
                email: email,
                type: 'sign-in',
                fetchOptions :{
                    onSuccess: () => {
                        toast.success('Email sent')
                        router.push(`/verify-request`)
                    },

                    onError: () => {
                        toast.error('Error sending email')
                    }
                }
            })
        })
   }

  return (
    <Card>
          <CardHeader>
            <div className='flex justify-center items-center'>
              <Link href="/" className="flex items-center gap-2 self-center font-medium">            
                <Image src={Logo} alt="Logo" width={112} height={112} />
              </Link>
            </div>
            <CardTitle className='text-xl text-center'>Welcome Back!</CardTitle>
            <CardDescription className='text-center'>Login with your credentials</CardDescription>
          </CardHeader>
          
          <CardContent className='flex flex-col gap-4'>
            <Button className='cursor-pointer w-full'variant="outline"
            onClick={signInWithGithub}
            disabled = {githubPending}
            >
              {githubPending ? (
                <>
                  <Loader className='size-4 animate-spin' />
                  <span>Loading...</span>
                </>
              ): (
                <>
                    <GithubIcon className='size-4' />
                      Sign in with GitHub
                </>
              )}
            </Button>
            
            <div className='relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border'>
              <span className='relative z-10 bg-card px-2 text-muted-foreground'>Or continue with</span>
            </div>
            
            <div className='grid gap-3'>
              <div className='grid gap-2'>
                <Label htmlFor="email">Email</Label>

                <Input type="email" placeholder='xyz@example.com' 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                required
                />

              </div>
              <Button
              onClick={signInWithEmail}
              disabled = {emailTransition}
              className='cursor-pointer mt-4'>
                {
                    emailTransition ? (
                        <>
                            <Loader2 className='size-4 animate-spin' />
                            <span>Loading...</span>
                        </>
                    ): (
                        <>
                            <Send className='size-4' />
                            <span>Continue with Email</span>
                        </>
                    )
                }
              </Button>
            </div>
          </CardContent>
        </Card>
  )
}

export default LoginForm