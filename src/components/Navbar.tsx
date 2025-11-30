import Link from "next/link";
import { Leaf } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-stone-100">
            <Link href="/" className="text-2xl font-bold text-emerald-800 flex items-center gap-2">
                <Leaf className="w-6 h-6" />
                EcoDrop
            </Link>
            <div className="hidden md:flex items-center gap-8 text-stone-600 font-medium">
                <Link href="/" className="hover:text-emerald-700 transition-colors">Home</Link>
                <Link href="/about" className="hover:text-emerald-700 transition-colors">About</Link>
                <Link href="/#products" className="hover:text-emerald-700 transition-colors">Shop</Link>
            </div>
            <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-5 py-2 rounded-full transition-colors text-sm font-medium">
                Shop Now
            </button>
        </nav>
    );
}
