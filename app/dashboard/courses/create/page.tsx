"use client"
import { Button, buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CourseCategories, CourseLevels, courseSchema, CourseSchemaType, CourseStatuses } from '@/lib/zodSchema'
import { ArrowLeft, PlusIcon, Sparkles } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import {useForm} from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import slugify from 'slugify'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { RichTextEditor } from '@/components/rich-text-editor/editor'
import { Uploader } from '@/components/file-uploader/Uploader'


const CreateCoursespage = () => {
     const form = useForm<CourseSchemaType>({
        resolver: zodResolver(courseSchema),
        defaultValues: {
            title: "",
            description: "",
            fileKey: "",
            price: 0,
            duration: 0,
            level: "Beginner",
            category: "Programming",
            status: 'Draft',
            slug: "",
            smallDescription: ""
        },
    });

    function onSubmit(values: CourseSchemaType) {
        console.log(values)
    }


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
                <Form {...form}>

                <form className='space-y-6' onSubmit={form.handleSubmit(onSubmit)}>


                    <FormField control={form.control} name="title" 
                    render={({field}) => (
                        <FormItem>
                            <FormLabel className='font-semibold'>Title</FormLabel>
                            <FormControl>
                                <Input placeholder="Enter the title of your course" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>      
                    )}
                    />

                    <div className='flex items-end gap-4'>

                        <FormField control={form.control} name="slug"
                         render={({field}) => (
                        <FormItem className='w-full'>
                            <FormLabel className='font-semibold'>Slug</FormLabel>
                            <FormControl>
                                <Input placeholder="Course Slug" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>      
                    )}
                    />

                    <Button className='cursor-pointer w-fit' type='button' onClick={() => {
                        const titleValue = form.getValues("title")
                        const slug = slugify(titleValue);

                        form.setValue('slug', slug, {shouldValidate: true})

                    }}>
                        Generate Slug <Sparkles className='ml-1' size={16} />
                    </Button>

                    </div>

                     <FormField control={form.control} name= "smallDescription"
                         render={({field}) => (
                        <FormItem className='w-full'>
                            <FormLabel className='font-semibold'>Small Description  </FormLabel>
                            <FormControl>
                                <Textarea placeholder="Enter a short description of your course" {...field} className='min-h-[120px]' />
                            </FormControl>

                            <FormMessage />
                        </FormItem>      
                    )}
                    />

                     <FormField control={form.control} name="description" 
                         render={({field}) => (
                        <FormItem className='w-full'>
                            <FormLabel className='font-semibold'>Course Description  </FormLabel>
                            <FormControl>

                                <RichTextEditor field={field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>      
                    )}
                    />

                    <FormField control={form.control} name="fileKey" 
                         render={({field}) => (
                        <FormItem className='w-full'>
                            <FormLabel className='font-semibold'>Thumbnail Image </FormLabel>
                            <FormControl>
                                {/* <Input placeholder="Thumbnail Url" {...field} /> */}

                                <Uploader />
                            </FormControl>

                            <FormMessage />
                        </FormItem>      
                    )}
                    />

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                         <FormField control={form.control} name="category" 
                         render={({field}) => (
                        <FormItem className='w-full'>
                            <FormLabel className='font-semibold'>Category</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={
                                field.value
                            }>

                            <FormControl>
                                <SelectTrigger className='w-full'>
                                    <SelectValue placeholder= "Select a category" />
                                </SelectTrigger>
                            </FormControl>  
                                <SelectContent>
                                    {CourseCategories.map((category) => (
                                        <SelectItem key={category} value={category}>

                                            {category}

                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            <FormMessage />
                        </FormItem>      
                        )}
                        />

                         <FormField control={form.control} name="level" 
                         render={({field}) => (
                        <FormItem className='w-full'>
                            <FormLabel className='font-semibold'>Level of the Course</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={
                                field.value
                            }>

                            <FormControl>
                                <SelectTrigger className='w-full'>
                                    <SelectValue placeholder= "Select level" />
                                </SelectTrigger>
                            </FormControl>  
                                <SelectContent>
                                    {CourseLevels.map((category) => (
                                        <SelectItem key={category} value={category}>

                                            {category}

                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            <FormMessage />
                        </FormItem>      
                        )}
                        />

                        <FormField control={form.control} name="duration"
                         render={({field}) => (
                        <FormItem className='w-full'>
                            <FormLabel className='font-semibold'>Duration(in hours)</FormLabel>
                            <FormControl>
                                <Input placeholder="Duration" type='number' {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>      
                    )}
                    />

                    <FormField control={form.control} name="price"
                         render={({field}) => (
                        <FormItem className='w-full'>
                            <FormLabel className='font-semibold'>Price (₹)</FormLabel>
                            <FormControl>
                                <Input placeholder="Price of the Course" type='number' {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>      
                    )}
                    />


                    </div>

                    <FormField control={form.control} name="status" 
                         render={({field}) => (
                        <FormItem className='w-full'>
                            <FormLabel className='font-semibold'>Status</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={
                                field.value
                            }>

                            <FormControl>
                                <SelectTrigger className='w-full'>
                                    <SelectValue placeholder= "Select status" />
                                </SelectTrigger>
                            </FormControl>  
                                <SelectContent>
                                    {CourseStatuses.map((category) => (
                                        <SelectItem key={category} value={category}>

                                            {category}

                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            <FormMessage />
                        </FormItem>      
                        )}
                        />


                    <Button className='cursor-pointer font-medium'>
                        Create Course <PlusIcon className='ml-1' size={16} />
                    </Button>
                    
                </form>

                </Form>
            </CardContent>
        </Card>
    </>
  )
}

export default CreateCoursespage
