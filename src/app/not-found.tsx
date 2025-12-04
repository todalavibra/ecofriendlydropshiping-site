"use client";

import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

/**
 * The 404 Not Found page component.
 *
 * Renders a user-friendly error message when a requested page does not exist.
 * Provides options to navigate back to the home page or the previous page.
 *
 * @returns The Not Found page component.
 */
export default function NotFound() {
    const router = useRouter();
    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-stone-100 flex items-center justify-center px-4">
            <div className="text-center max-w-2xl">
                <div className="mb-8">
                    <h1 className="text-9xl font-bold text-emerald-700 mb-4">404</h1>
                    <h2 className="text-4xl font-bold text-stone-800 mb-4">Page Not Found</h2>
                    <p className="text-xl text-stone-600 mb-8">
                        Oops! The page you're looking for seems to have wandered off into the sustainable wilderness.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg"
                    >
                        <Home className="w-5 h-5" />
                        Go Home
                    </Link>
                    <button
                        onClick={() => router.back()}
                        className="inline-flex items-center gap-2 border-2 border-emerald-700 text-emerald-700 hover:bg-emerald-50 px-8 py-4 rounded-full font-semibold transition-all"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
}
