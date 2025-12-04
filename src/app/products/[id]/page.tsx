"use client";

import Image from "next/image";
import { notFound, useParams } from "next/navigation";
import { products } from "@/app/data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartSidebar from "@/components/CartSidebar";
import { Check, Truck, ShieldCheck, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";

// Helper to find product
const getProduct = (id: string) => {
    return products.find((p) => p.id === id);
};

export default function ProductPage() {
    const params = useParams();
    const productId = params.id as string;
    const product = getProduct(productId);
    const { addItem, openCart } = useCartStore();

    if (!product) {
        notFound();
    }

    const handleAddToCart = () => {
        addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image
        });
        openCart();
    };

    return (
        <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
            <Navbar />
            <CartSidebar />

            <div className="container mx-auto px-4 py-12">
                <Link href="/#products" className="inline-flex items-center text-stone-500 hover:text-emerald-700 mb-8 transition-colors">
                    <ArrowLeft className="w-4 h-4 mr-2" /> Back to Shop
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                    {/* Product Image */}
                    <div className="relative h-[400px] md:h-[600px] bg-white rounded-3xl overflow-hidden shadow-lg">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Product Details */}
                    <div className="flex flex-col justify-center">
                        <div className="text-sm font-bold text-emerald-600 uppercase tracking-wider mb-2">
                            {product.category}
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
                            {product.name}
                        </h1>
                        <div className="text-3xl font-bold text-emerald-700 mb-8">
                            ${product.price.toFixed(2)}
                        </div>

                        <p className="text-lg text-stone-600 mb-8 leading-relaxed">
                            {product.description}
                        </p>

                        <div className="space-y-4 mb-10">
                            <div className="flex items-center text-stone-700">
                                <Check className="w-5 h-5 text-emerald-500 mr-3" />
                                <span>Eco-friendly materials</span>
                            </div>
                            <div className="flex items-center text-stone-700">
                                <Check className="w-5 h-5 text-emerald-500 mr-3" />
                                <span>Plastic-free packaging</span>
                            </div>
                            <div className="flex items-center text-stone-700">
                                <Check className="w-5 h-5 text-emerald-500 mr-3" />
                                <span>Carbon neutral shipping</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <button
                                onClick={handleAddToCart}
                                className="flex-1 bg-emerald-700 hover:bg-emerald-800 text-white text-lg font-semibold py-4 rounded-full transition-all transform hover:scale-[1.02] shadow-md hover:shadow-lg"
                            >
                                Add to Cart
                            </button>
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-8 border-t border-stone-200">
                            <div className="flex items-center gap-3 text-sm text-stone-500">
                                <Truck className="w-5 h-5 text-emerald-600" />
                                <span>Free shipping over $50</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-stone-500">
                                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                                <span>30-day return policy</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
