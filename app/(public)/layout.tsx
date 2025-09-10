import { ReactNode } from "react";
import { Navbar } from "./_components/Navbar";

export default function LayoutPublic({ children }: { children: ReactNode }) {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Subtle background effects */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-64 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 -right-64 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
            </div>
            
            <Navbar />
            <main className="relative container mx-auto px-4 md:px-6 lg:px-8">
                {children}
            </main>
        </div>
    );
}