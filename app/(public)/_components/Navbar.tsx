"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from '@/public/logo_two.png'
import { authClient } from "@/lib/auth-client";
import { buttonVariants } from "@/components/ui/button";
import { UserDropdown } from "./UserDropDown";

const navigationItems = [
    {name: 'Home', href: '/'},
    {name: 'Courses', href: '/courses'},
    {name: 'Dashboard', href: '/dashboard'},
]

export function Navbar() {
    const {data: session, isPending} = authClient.useSession()
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-800/50 bg-black/80 backdrop-blur-xl">
            <div className="container flex h-20 items-center mx-auto px-4 md:px-6 lg:px-8">
                <Link href="/" className="flex items-center space-x-3 mr-8 lg:mr-12">
                    <Image 
                        src={Logo}
                        alt="Logo"
                        className="w-14 h-14 object-contain"
                    />
                    <span className="text-xl font-bold text-white">
                        SpecTrum
                    </span>
                </Link>

                {/*Desktop Navigation */}
                <nav className="hidden md:flex md:flex-1 md:items-center md:justify-between">
                    <div className="flex items-center space-x-8 ml-4">
                        {navigationItems.map((item) => (
                            <Link 
                                key={item.name} 
                                href={item.href} 
                                className="text-lg transition-colors hover:text-primary"
                            >                        
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className="flex items-center space-x-4">
                        {
                            isPending ? null : session ? (
                                <UserDropdown email={session.user.email} 
                                image = {session.user.image || ""}
                                name = {session.user.name}
                                />
                            ) : (
                                <>
                                   <Link href="/login" className={buttonVariants({variant: "secondary"})}>
                                        Login
                                   </Link>
                                    <Link href="/login" className={buttonVariants()}>
                                        Get Started
                                   </Link>
                                </>
                            )
                        }
                    </div>
                </nav>
            </div>
        </header>
    );
}