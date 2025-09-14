import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CreateCoursespage = () => {
  return (
    <>
        <div className='flex items-center gap-4'>
            <Link href="/dashboard/courses" className={buttonVariants({
                variant: "outline",
                size: "icon"
            })}>
                <ArrowLeft size={5} />
            
            </Link>

            <h1 className='text-2xl font-bold'>Create Courses</h1>
        </div>

        <Card>
            <CardHeader>
                <CardTitle className='text-xl'>Basic Information</CardTitle>
                <CardDescription>Provide basic information about the course</CardDescription>
            </CardHeader>

            <CardContent>
                
            </CardContent>
        </Card>
    </>
  )
}

export default CreateCoursespage
