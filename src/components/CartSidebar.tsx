"use client";

import Image from "next/image";
import { X, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/cartStore";
import Link from "next/link";

export default function CartSidebar() {
    const { items, isOpen, closeCart, updateQuantity, removeItem, getTotalPrice } = useCartStore();

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/50 z-40 transition-opacity"
                onClick={closeCart}
            />

            {/* Sidebar */}
            <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-stone-200">
                    <div className="flex items-center gap-2">
                        <ShoppingBag className="w-6 h-6 text-emerald-700" />
                        <h2 className="text-2xl font-bold text-stone-900">Your Cart</h2>
                    </div>
                    <button
                        onClick={closeCart}
                        className="p-2 hover:bg-stone-100 rounded-full transition-colors"
                    >
                        <X className="w-6 h-6" />
                    </button>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto p-6">
                    {items.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center">
                            <ShoppingBag className="w-16 h-16 text-stone-300 mb-4" />
                            <p className="text-stone-500 text-lg mb-2">Your cart is empty</p>
                            <p className="text-stone-400 text-sm">Add some eco-friendly products!</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {items.map((item) => (
                                <div key={item.id} className="flex gap-4 bg-stone-50 p-4 rounded-xl">
                                    <div className="relative w-20 h-20 bg-white rounded-lg overflow-hidden flex-shrink-0">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-stone-900 mb-1 truncate">{item.name}</h3>
                                        <p className="text-emerald-700 font-bold mb-2">${item.price.toFixed(2)}</p>
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                className="w-7 h-7 rounded-full bg-white border border-stone-300 flex items-center justify-center hover:bg-stone-100 transition-colors"
                                            >
                                                <Minus className="w-3 h-3" />
                                            </button>
                                            <span className="w-8 text-center font-medium">{item.quantity}</span>
                                            <button
                                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                className="w-7 h-7 rounded-full bg-white border border-stone-300 flex items-center justify-center hover:bg-stone-100 transition-colors"
                                            >
                                                <Plus className="w-3 h-3" />
                                            </button>
                                        </div>
                                    </div>
                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="text-stone-400 hover:text-red-500 transition-colors"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer */}
                {items.length > 0 && (
                    <div className="border-t border-stone-200 p-6 space-y-4">
                        <div className="flex items-center justify-between text-lg">
                            <span className="font-semibold text-stone-700">Subtotal</span>
                            <span className="font-bold text-2xl text-emerald-700">${getTotalPrice().toFixed(2)}</span>
                        </div>
                        <Link
                            href="/checkout"
                            onClick={closeCart}
                            className="block w-full bg-emerald-700 hover:bg-emerald-800 text-white text-center py-4 rounded-full font-semibold transition-colors"
                        >
                            Proceed to Checkout
                        </Link>
                        <button
                            onClick={closeCart}
                            className="block w-full border-2 border-stone-300 text-stone-700 text-center py-3 rounded-full font-semibold hover:bg-stone-50 transition-colors"
                        >
                            Continue Shopping
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}
