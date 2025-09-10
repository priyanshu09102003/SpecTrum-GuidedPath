"use client";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { BookOpen, Gamepad2, TrendingUp, Users } from "lucide-react";

interface featureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: featureProps[] = [
  {
    title: 'Comprehensive Learning',
    description: "Access a wide range of carefully curated courses designed by expert mentors",
    icon: <BookOpen className="w-8 h-8 text-blue-400" />
  },
  {
    title: 'Interactive Learning',
    description: "Engage with interactive content, quizzes, and assignments to enhance your learning experience",
    icon: <Gamepad2 className="w-8 h-8 text-purple-400" />
  },
  {
    title: 'Progress Tracking',
    description: 'Monitor your progress with detailed analytics and personalized dashboards',
    icon: <TrendingUp className="w-8 h-8 text-emerald-400" />
  },
  {
    title: 'Knowledge Sharing',
    description: 'Become a part of vibrant community of expert learners and mentors to collaborate and share knowledge',
    icon: <Users className="w-8 h-8 text-orange-400" />
  },
];

export default function Home() {
  const router = useRouter();
  
  const {
    data: session,
  } = authClient.useSession();

  async function signOut() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
          toast.success('Signed out successfully')
        }
      }
    })
  }
        
  return (
    <>
      <section className="relative py-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-64 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 -right-64 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="relative flex flex-col items-center text-center space-y-8">
          <Badge className="px-6 py-2 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border-blue-400/30 text-blue-300 hover:from-blue-500/30 hover:via-purple-500/30 hover:to-pink-500/30 transition-all duration-300">
            ✨ Unified learning, amplified results
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              Your Guided Learning Journey
            </span>
          </h1>
          
          <p className="max-w-[700px] text-gray-300 md:text-xl leading-relaxed">
            Discover a new way to learn with our 
            <span className="text-blue-400 font-semibold"> modern, interactive </span>
            learning management system. Access 
            <span className="text-purple-400 font-semibold"> high-quality, in-depth courses</span>, guided by 
            <span className="text-pink-400 font-semibold"> professional mentors</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Link
              href="/courses"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl font-semibold text-white text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/25 hover:-translate-y-1"
            >
              Explore Courses
            </Link>
            
            <Link
              href="/login"
              className="px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-600/50 rounded-xl font-semibold text-white text-lg transition-all duration-300 hover:bg-gray-700/50 hover:border-gray-500/50 hover:shadow-xl hover:-translate-y-1"
            >
              Sign In
            </Link>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-16">
        {features.map((feature, index) => (
          <Card 
            key={index} 
            className="group bg-gray-900/50 backdrop-blur-sm border-gray-800/50 hover:border-gray-600/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 cursor-pointer"
          >
            <CardHeader>
              <div className="mb-4 p-3 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 w-fit group-hover:from-gray-700 group-hover:to-gray-800 transition-all duration-300">
                {feature.icon}
              </div>
              <CardTitle className="text-xl text-white">{feature.title}</CardTitle>
            </CardHeader>

            <CardContent>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </section>
    </>
  );
}