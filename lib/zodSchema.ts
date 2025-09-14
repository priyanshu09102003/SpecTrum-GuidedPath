import { z } from 'zod'

// Make sure these match exactly with your Prisma enums
export const CourseLevels = ["Beginner", "Intermediate", "Advanced"] as const;
export const CourseStatuses = ["Draft", "Published", "Archive"] as const;

export const CourseCategories = [
    "Programming",
    "Business",
    "Finance",
    "Software Development",
    "Personal Development",
    "Design",
    "Marketing",
    "Health and Fitness",
    "Music",
    "Teaching & Academics",
    "DevOps",
    "Blockchain",
    "AI & Machine Learning",
    "Language"
] as const;

export const courseSchema = z.object({
    title: z.string().min(3, { message: "Course Title must be atleast 3 characters long" }).max(100, { message: "Course Title cannot exceed more than 100 characters" }),
    description: z.string().min(3, { message: "Course Description must be atleast 3 characters long" }),
    fileKey: z.string().min(1, { message: "File is required" }),
    price: z.coerce.number().min(0, { message: "Price must be a positive number" }),
    duration: z.coerce.number().min(1, { message: "Course Duration must be atleast 1 hour" }).max(300, { message: "Course Duration cannot exceed more than 300 hours" }),
    level: z.enum(CourseLevels, { message: 'Please specify the level of the course' }),
    category: z.enum(CourseCategories, { 
        message: "Category is required"
    }),
    smallDescription: z.string().min(3, { message: "Must be atleast 3 characters" }).max(200, { message: "Cannot exceed more than 200 characters" }),
    slug: z.string().min(3, { message: "Must be atleast 3 characters long" }),
    status: z.enum(CourseStatuses, { message: "Status is required" })
});

export type CourseSchemaType = z.infer<typeof courseSchema>