import Image from "next/image";
import Link from "next/link";
import Logo from '@/public/logo_two.png'

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-800/50 bg-black/80 backdrop-blur-xl">
            <div className="container flex h-20 items-center mx-auto px-4 md:px-6 lg:px-8">
                <Link href="/" className="flex items-center space-x-3 mr-4">
                    <Image 
                        src={Logo} 
                        alt="Logo" 
                        className="w-14 h-14 object-contain"
                    />
                    <span className="text-xl font-bold text-white">
                        SpecTrum
                    </span>
                </Link>
                
                <nav>
                </nav>
            </div>
        </header>
    );
}