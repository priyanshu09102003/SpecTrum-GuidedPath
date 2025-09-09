"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";


export default function Home() {

  const router = useRouter();

  const {
    data: session,
  } = authClient.useSession();

  async function signOut(){
    await authClient.signOut({
      fetchOptions:{
        onSuccess: () => {
          router.push("/");

          toast.success('Signed out successfully')
        }
      }
    })
  }
  


  return (
   <>
    <section className="relative py-20 space-y-22">
        <div className="flex flex-col items-center text-center space-y-8">
            <Badge variant="outline">
                Unified learning, amplified results
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Your Guided Learning Journey</h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Discover a new way to learn with our modern, interactive learning management system. Access high-quality, in-depth courses, guided by professional mentors.
            </p>
        </div>

    </section>
   
   </>
  );
}
