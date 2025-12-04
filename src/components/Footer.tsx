import Link from "next/link";
import { Leaf } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-emerald-950 text-emerald-100 py-16">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="col-span-1 md:col-span-2">
                    <div className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
                        <Leaf className="w-6 h-6" />
                        EcoDrop
                    </div>
                    <p className="max-w-sm text-emerald-200/80">
                        Making sustainable living accessible to everyone. Join us in our mission to protect the planet, one purchase at a time.
                    </p>
                </div>
                <div>
                    <h4 className="font-bold text-white mb-4">Shop</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/#products" className="hover:text-white transition-colors">All Products</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Best Sellers</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">New Arrivals</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Gift Cards</Link></li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-bold text-white mb-4">Company</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                        <li><Link href="/about#sustainability" className="hover:text-white transition-colors">Sustainability</Link></li>
                        <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        <li><Link href="#" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto px-4 mt-12 pt-8 border-t border-emerald-900 text-center text-sm text-emerald-400">
                © {new Date().getFullYear()} EcoDrop. All rights reserved.
            </div>
        </footer>
    );
}
