"use client";

import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
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
   <div className="p-24">
    <h1 className="text-2xl font-bold text-red-500">Building Spectrum</h1>

    {session ? <div>
      <p>{session.user.name}</p>
      <Button onClick={signOut} className="cursor-pointer">Logout</Button>
    </div>: <Button className="cursor-pointer">Login</Button>}
   </div>
  );
}
