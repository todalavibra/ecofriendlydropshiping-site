"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CreditCard, Lock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCartStore } from "@/store/cartStore";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
    const router = useRouter();
    const { items, getTotalPrice, clearCart } = useCartStore();
    const [isProcessing, setIsProcessing] = useState(false);

    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        state: "",
        zip: "",
                < div className = "container mx-auto px-4 py-20 text-center" >
                    <h1 className="text-3xl font-bold text-stone-900 mb-4">Your cart is empty</h1>
                    <p className="text-stone-600 mb-8">Add some products before checking out!</p>
                    <Link
                        href="/#products"
                        className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded-full font-semibold transition-colors"
                    >
                        Continue Shopping
                    </Link>
                </div >
        <Footer />
            </div >
        );
}

return (
    <div className="min-h-screen bg-stone-50">
        <Navbar />

        <div className="container mx-auto px-4 py-12">
            <Link href="/" className="inline-flex items-center text-stone-500 hover:text-emerald-700 mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Shop
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Checkout Form */}
                <div>
                    <h1 className="text-3xl font-bold text-stone-900 mb-8">Checkout</h1>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Contact Information */}
                        <div>
                            <h2 className="text-xl font-semibold text-stone-900 mb-4">Contact Information</h2>
                            <input
                                type="email"
                                placeholder="Email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                        </div>

                        {/* Shipping Address */}
                        <div>
                            <h2 className="text-xl font-semibold text-stone-900 mb-4">Shipping Address</h2>
                            <div className="grid grid-cols-2 gap-4">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    required
                                    value={formData.firstName}
                                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                    className="px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    required
                                    value={formData.lastName}
                                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                    className="px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Address"
                                required
                                value={formData.address}
                                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 mt-4"
                            />
                            <div className="grid grid-cols-3 gap-4 mt-4">
                                <input
                                    type="text"
                                    placeholder="City"
                                    required
                                    value={formData.city}
                                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                    className="px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                />
                                <input
                                    type="text"
                                    placeholder="State"
                                    required
                                    value={formData.state}
                                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                                    className="px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                />
                                <input
                                    type="text"
                                    placeholder="ZIP"
                                    required
                                    value={formData.zip}
                                    onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                                    className="px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                        </div>

                        {/* Payment Information */}
                        <div>
                            <h2 className="text-xl font-semibold text-stone-900 mb-4 flex items-center gap-2">
                                <CreditCard className="w-5 h-5" />
                                Payment Information
                            </h2>
                            <input
                                type="text"
                                placeholder="Card Number"
                                required
                                value={formData.cardNumber}
                                onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                            />
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <input
                                    type="text"
                                    placeholder="MM/YY"
                                    required
                                    value={formData.expiry}
                                    onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
                                    className="px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                />
                                <input
                                    type="text"
                                    placeholder="CVV"
                                    required
                                    value={formData.cvv}
                                    onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                                    className="px-4 py-3 border border-stone-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isProcessing}
                            className="w-full bg-emerald-700 hover:bg-emerald-800 disabled:bg-stone-400 text-white py-4 rounded-full font-semibold transition-colors flex items-center justify-center gap-2"
                        >
                            <Lock className="w-5 h-5" />
                            {isProcessing ? "Processing..." : `Pay $${getTotalPrice().toFixed(2)}`}
                        </button>

                        <p className="text-xs text-stone-500 text-center">
                            🔒 Your payment information is secure and encrypted
                        </p>
                    </form>
                </div>

                {/* Order Summary */}
                <div>
                    <div className="bg-white rounded-2xl p-8 sticky top-24">
                        <h2 className="text-2xl font-bold text-stone-900 mb-6">Order Summary</h2>

                        <div className="space-y-4 mb-6">
                            {items.map((item) => (
                                <div key={item.id} className="flex gap-4">
                                    <div className="relative w-20 h-20 bg-stone-100 rounded-lg overflow-hidden flex-shrink-0">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-semibold text-stone-900">{item.name}</h3>
                                        <p className="text-sm text-stone-500">Qty: {item.quantity}</p>
                                        <p className="text-emerald-700 font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="border-t border-stone-200 pt-4 space-y-2">
                            <div className="flex justify-between text-stone-600">
                                <span>Subtotal</span>
                                <span>${getTotalPrice().toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-stone-600">
                                <span>Shipping</span>
                                <span className="text-emerald-600 font-semibold">FREE</span>
                            </div>
                            <div className="flex justify-between text-xl font-bold text-stone-900 pt-2 border-t border-stone-200">
                                <span>Total</span>
                                <span>${getTotalPrice().toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </div>
);
}
