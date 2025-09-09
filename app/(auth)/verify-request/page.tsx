"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import React, { useState, useTransition } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/logo.png'
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from '@/components/ui/input-otp'
import { Button } from '@/components/ui/button';
import { authClient } from '@/lib/auth-client';
import { useRouter, useSearchParams } from 'next/navigation';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

const VerifyRequest = () => {
    const router = useRouter()
    const [otp, setOTP] = useState("");
    const [emailPending, startTransition] = useTransition();
    const params = useSearchParams()
    const email = params.get('email') as string;
    const isOTPCompleted = otp.length === 6

    function verifyOTP() {
        startTransition(async() => {
            await authClient.signIn.emailOtp({
                email: email,
                otp: otp,
                fetchOptions: {
                    onSuccess: () => {
                        toast.success('Email verified successfully!')
                        router.push("/")
                    },
                    onError: () => {
                        toast.error('Error verifying your email or OTP')
                    }
                }
            })
        })
    }
  return (
    <Card className='w-full mx-auto'>
        <CardHeader>
             <div className='flex justify-center items-center mb-5'>
                          <Link href="/" className="flex items-center gap-2 self-center font-medium">            
                            <Image src={Logo} alt="Logo" width={112} height={112} />
                          </Link>
            </div>
            <CardTitle className='text-xl text-center'>Please check your Email    </CardTitle>

            <CardDescription className='text-center'>
                We have sent a verification code to your email address. Please enter the code to complete the verification process   
                </CardDescription>
        </CardHeader>

        <CardContent className = "space-y-6">
            <div className='flex flex-col items-center space-y-2'>
                <InputOTP value={otp} onChange={(value) => setOTP(value)} maxLength={6} className='gap-2'>
                    <InputOTPGroup>
                        <InputOTPSlot index={0}/>
                        <InputOTPSlot index={1}/>
                        <InputOTPSlot index={2}/>
                    </InputOTPGroup>
                    <InputOTPSeparator />
                    <InputOTPGroup>
                        <InputOTPSlot index={3}/>
                        <InputOTPSlot index={4}/>
                        <InputOTPSlot index={5}/>
                    </InputOTPGroup>
                </InputOTP>
                <p className='text-sm text-muted-foreground'>Enter the 6-digit code that we have sent to your Email</p>
            </div>

            <Button className='w-full cursor-pointer'
            onClick={verifyOTP}
            disabled = {emailPending || !isOTPCompleted}
            >
                {emailPending ? (
                    <>
                        <Loader2 className='size-4 animate-spin' />
                        <span>Verifying OTP...</span>
                    </>
                ): (
                    "Verify Account"
                )}
            </Button>


        </CardContent>
    </Card>
  )
}

export default VerifyRequest
