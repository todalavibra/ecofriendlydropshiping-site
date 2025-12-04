"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CreditCard, Lock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCartStore } from "@/store/cartStore";
import { useRouter } from "next/navigation";

/**
 * The Checkout page component.
 *
 * This page allows users to review their order, enter shipping and payment information,
 * and complete their purchase. It includes:
 * - A multi-step form for contact, shipping, and payment details.
 * - Real-time form validation.
 * - An order summary section displaying cart items and totals.
 * - Integration with the `CartStore` to retrieve cart data and clear the cart upon successful payment.
 *
 * @returns The Checkout page component.
 */
export default function CheckoutPage() {
    const router = useRouter();
    const { items, getTotalPrice, clearCart } = useCartStore();
    const [isProcessing, setIsProcessing] = useState(false);
    const [errors, setErrors] = useState<Record<string, string>>({});

    const [formData, setFormData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        state: "",
        zip: "",
        cardNumber: "",
        expiry: "",
        cvv: ""
    });

    /**
     * Validates the checkout form fields.
     *
     * Checks for valid email format, ZIP code length, card number length,
     * expiry date format, and CVV length. Updates the `errors` state object.
     *
     * @returns `true` if the form is valid, `false` otherwise.
     */
    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        // Email validation
        if (!formData.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            newErrors.email = "Please enter a valid email address";
        }

        // ZIP code validation
        if (!formData.zip.match(/^\d{5}$/)) {
            newErrors.zip = "ZIP code must be 5 digits";
        }

        // Card number validation (basic)
        if (!formData.cardNumber.match(/^\d{16}$/)) {
            newErrors.cardNumber = "Card number must be 16 digits";
        }

        // Expiry validation
        if (!formData.expiry.match(/^(0[1-9]|1[0-2])\/\d{2}$/)) {
            newErrors.expiry = "Format: MM/YY";
        }

        // CVV validation
        if (!formData.cvv.match(/^\d{3,4}$/)) {
            newErrors.cvv = "CVV must be 3-4 digits";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    /**
     * Handles the form submission.
     *
     * Validates the form, simulates a payment processing delay, clears the cart,
     * and redirects the user to the success page.
     *
     * @param e - The form submission event.
     */
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsProcessing(true);

        // Simulate payment processing
        await new Promise(resolve => setTimeout(resolve, 2000));

        clearCart();
        setIsProcessing(false);
        router.push("/success");
    };

    if (items.length === 0) {
        return (
            <div className="min-h-screen bg-stone-50">
                <Navbar />
                <div className="container mx-auto px-4 py-20 text-center">
                    <h1 className="text-3xl font-bold text-stone-900 mb-4">Your cart is empty</h1>
                    <p className="text-stone-600 mb-8">Add some products before checking out!</p>
                    <Link
                        href="/#products"
                        className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded-full font-semibold transition-colors"
                    >
                        Continue Shopping
                    </Link>
                </div>
                <Footer />
            </div>
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
                                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-stone-300 focus:ring-emerald-500'
                                        }`}
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
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
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="ZIP"
                                            required
                                            value={formData.zip}
                                            onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                                            className={`px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 w-full ${errors.zip ? 'border-red-500 focus:ring-red-500' : 'border-stone-300 focus:ring-emerald-500'
                                                }`}
                                        />
                                        {errors.zip && <p className="text-red-500 text-xs mt-1">{errors.zip}</p>}
                                    </div>
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
                                    maxLength={16}
                                    value={formData.cardNumber}
                                    onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value.replace(/\D/g, '') })}
                                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 ${errors.cardNumber ? 'border-red-500 focus:ring-red-500' : 'border-stone-300 focus:ring-emerald-500'
                                        }`}
                                />
                                {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
                                <div className="grid grid-cols-2 gap-4 mt-4">
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="MM/YY"
                                            required
                                            maxLength={5}
                                            value={formData.expiry}
                                            onChange={(e) => setFormData({ ...formData, expiry: e.target.value })}
                                            className={`px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 w-full ${errors.expiry ? 'border-red-500 focus:ring-red-500' : 'border-stone-300 focus:ring-emerald-500'
                                                }`}
                                        />
                                        {errors.expiry && <p className="text-red-500 text-xs mt-1">{errors.expiry}</p>}
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="CVV"
                                            required
                                            maxLength={4}
                                            value={formData.cvv}
                                            onChange={(e) => setFormData({ ...formData, cvv: e.target.value.replace(/\D/g, '') })}
                                            className={`px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 w-full ${errors.cvv ? 'border-red-500 focus:ring-red-500' : 'border-stone-300 focus:ring-emerald-500'
                                                }`}
                                        />
                                        {errors.cvv && <p className="text-red-500 text-xs mt-1">{errors.cvv}</p>}
                                    </div>
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
