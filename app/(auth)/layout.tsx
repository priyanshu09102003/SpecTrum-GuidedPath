import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export default function AuthLayout({children} : {children:ReactNode}){
    return(
        <div className="relative flex min-h-svh flex-col items-center justify-center">
           
           <Link href="/" className={buttonVariants({
            variant: 'secondary',
            className: 'absolute top-4 left-4 cursor-pointer'
           })}>

           <ArrowLeft className="size-4" />
            Back
           </Link>
           
            <div className="flex w-full max-w-sm flex-col gap-6">
                {children}

                <div className="text-balance text-center text-sm text-muted-foreground">
                    By clicking continue, you agree to our <span className="hover:text-primary hover:underline">Terms of Service   </span>{" "} and <span className="hover:text-primary hover:underline">Privacy Policies</span>.
                </div>
            </div>
        </div>
    )
}