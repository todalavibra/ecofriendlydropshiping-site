"use client";

import Link from "next/link";
import { Leaf, ShoppingCart } from "lucide-react";
import { useCartStore } from "@/store/cartStore";

export default function Navbar() {
    const { getTotalItems, openCart } = useCartStore();
    const itemCount = getTotalItems();

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
            <div className="flex items-center gap-4">
                <button
                    onClick={openCart}
                    className="relative p-2 hover:bg-stone-100 rounded-full transition-colors"
                >
                    <ShoppingCart className="w-6 h-6 text-stone-700" />
                    {itemCount > 0 && (
                        <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                            {itemCount}
                        </span>
                    )}
                </button>
                <button
                    onClick={openCart}
                    className="bg-emerald-700 hover:bg-emerald-800 text-white px-5 py-2 rounded-full transition-colors text-sm font-medium"
                >
                    Shop Now
                </button>
            </div>
        </nav>
    );
}
