import { buttonVariants } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const CoursesPage = () => {
  return (
    <>
        <div className='flex items-center justify-between'>

            <h1 className='text-2xl font-bold'>Your Courses</h1>

            <Link href="/dashboard/courses/create"
            className={buttonVariants()}
            >
                Create Course <Plus size={5} />
            </Link>
        </div>

        <div>
            <h1>View all your courses in this section</h1>
        </div>
    </>
  )
}

export default CoursesPage
