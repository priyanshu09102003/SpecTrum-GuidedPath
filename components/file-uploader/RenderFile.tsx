import { cn } from "@/lib/utils";
import { CloudUploadIcon, ImageIcon, RefreshCcwIcon } from "lucide-react";
import { Button } from "../ui/button";

export function RenderEmptyState({isDragActive} : {isDragActive: boolean}){
    return(
        <div className="text-center">

            <div className="flex items-center mx-auto justify-center size-12 rounded-full bg-muted mb-4">
                <CloudUploadIcon className={cn(
                    'size-6 text-muted-foreground' ,
                    isDragActive && "text-primary"
                )} />
            </div>

            <p className="text-base font-semibold text-foreground">
                Drop your files here or{" "}
                <span className="text-primary font-bold cursor-pointer">click to upload</span> 
            </p>

            <Button className="mt-4 cursor-pointer" type="button">
                Select File
            </Button>

        </div>
    )
}

export function RenderErrorState(){
    return(
       <div className="text-center">
            <div className="flex items-center mx-auto justify-center size-12 rounded-full bg-destructive/40 mb-4">
                <ImageIcon className={cn(
                    'size-6 text-destructive')} />
            </div>

            <p className="text-base font-semibold">Upload Failed</p>
            <p className="text-xs mt-1 text-muted-foreground">Err... Something went wrong</p>
            <Button type="button" className="mt-4 cursor-pointer">Retry <RefreshCcwIcon /></Button>
       </div>

        
    )
}