import {z} from 'zod'

export const CourseLevels = ["Beginner", "Intermediate" , "Advanced"] as const;
export const CourseStatus = ["Draft" , "Published" , "Archive"] as const;
export const courseSchema = z.object({
    title: z.string().min(3 , {message: "Course Title must be atleast 3 characters long"}).max(100, {message: "Course Title cannot exceed more than 100 characters"}),

    description: z.string().min(3 , {message: "Course Description must be atleast 3 characters long"}),

    fileKey: z.string().min(1, {message: "File is required"}),

    price: z.coerce.number().min(1, {message: "Price must be a positive number"}),

    duration: z.coerce.number().min(1 , {message: "Course Duration must be atleast 1 hour"}).max(300 ,  {message: "Course Duration cannot exceed more than 300 hours"}),

    level: z.enum(CourseLevels, {message: 'Please specify the level of the course'}),
    category: z.string(),

    smallDescription: z.string().min(3, {message: "Must be atleast 3 characters"}).max(200 , {message: "Cannot exceed more than 200 characters"}),

    slug: z.string().min(3, {message: "Must be atleast 3 characters long"}),

    status: z.enum(CourseStatus, {message: "Status is required"})
});

