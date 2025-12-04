"use client";

import Link from "next/link";
import { Leaf, ShoppingCart, Menu, X } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import { useState } from "react";

/**
 * Navbar component.
 *
 * Renders the top navigation bar with the logo, navigation links, and cart toggle.
 * It is responsive, showing a hamburger menu on smaller screens.
 *
 * @returns The Navbar component.
 */
export default function Navbar() {
    const { getTotalItems, openCart } = useCartStore();
    const itemCount = getTotalItems();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            <nav className="flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-stone-100">
                <Link href="/" className="text-2xl font-bold text-emerald-800 flex items-center gap-2">
                    <Leaf className="w-6 h-6" />
                    EcoDrop
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8 text-stone-600 font-medium">
                    <Link href="/" className="hover:text-emerald-700 transition-colors">Home</Link>
                    <Link href="/about" className="hover:text-emerald-700 transition-colors">About</Link>
                    <Link href="/#products" className="hover:text-emerald-700 transition-colors">Shop</Link>
                    <Link href="/contact" className="hover:text-emerald-700 transition-colors">Contact</Link>
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={openCart}
                        className="relative p-2 hover:bg-stone-100 rounded-full transition-colors"
                    >
                        <ShoppingCart className="w-6 h-6 text-stone-700" />
                        {itemCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
                                {itemCount}
                            </span>
                        )}
                    </button>
                    <button
                        onClick={openCart}
                        className="hidden md:block bg-emerald-700 hover:bg-emerald-800 text-white px-5 py-2 rounded-full transition-all transform hover:scale-105 text-sm font-medium"
                    >
                        Shop Now
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 hover:bg-stone-100 rounded-full transition-colors"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="w-6 h-6 text-stone-700" />
                        ) : (
                            <Menu className="w-6 h-6 text-stone-700" />
                        )}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setMobileMenuOpen(false)}
            >
                <div
                    className={`absolute top-[73px] left-0 right-0 bg-white border-b border-stone-200 shadow-lg transition-transform duration-300 ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
                        }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex flex-col p-6 space-y-4">
                        <Link
                            href="/"
                            className="text-lg font-medium text-stone-700 hover:text-emerald-700 transition-colors py-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="text-lg font-medium text-stone-700 hover:text-emerald-700 transition-colors py-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            href="/#products"
                            className="text-lg font-medium text-stone-700 hover:text-emerald-700 transition-colors py-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Shop
                        </Link>
                        <Link
                            href="/contact"
                            className="text-lg font-medium text-stone-700 hover:text-emerald-700 transition-colors py-2"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Contact
                        </Link>
                        <button
                            onClick={() => {
                                openCart();
                                setMobileMenuOpen(false);
                            }}
                            className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-full transition-all transform hover:scale-105 text-sm font-medium w-full"
                        >
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
