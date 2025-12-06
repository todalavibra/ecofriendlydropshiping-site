"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CreditCard, Lock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useCartStore } from "@/store/cartStore";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

/**
 * The Checkout page component with Stripe integration.
 *
 * This page allows users to review their order and complete their purchase using Stripe.
 * It displays cart items, totals, and a button to proceed to Stripe checkout.
 *
 * @returns The Checkout page component.
 */
export default function CheckoutPage() {
    const { items, getTotalPrice } = useCartStore();
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState<string | null>(null);

    /**
     * Handles the Stripe checkout process.
     * Creates a checkout session and redirects to Stripe.
     */
    const handleStripeCheckout = async () => {
        setIsProcessing(true);
        setError(null);

        try {
            // Create checkout session
            const response = await fetch('/api/create-checkout-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ items }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to create checkout session');
            }

            // Redirect to Stripe Checkout
            const stripe = await stripePromise;
            if (!stripe) {
                throw new Error('Stripe failed to load');
            }

            const { error: stripeError } = await stripe.redirectToCheckout({
                sessionId: data.sessionId,
            });

            if (stripeError) {
                throw new Error(stripeError.message);
            }
        } catch (err: any) {
            console.error('Checkout error:', err);
            setError(err.message || 'Something went wrong. Please try again.');
            setIsProcessing(false);
        }
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
                    {/* Checkout Info */}
                    <div>
                        <h1 className="text-3xl font-bold text-stone-900 mb-8">Secure Checkout</h1>

                        <div className="bg-white rounded-2xl p-8 mb-6">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                                    <CreditCard className="w-6 h-6 text-emerald-700" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold text-stone-900">Payment with Stripe</h2>
                                    <p className="text-sm text-stone-600">Secure payment processing</p>
                                </div>
                            </div>

                            <div className="space-y-4 mb-6">
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-emerald-700 text-sm font-bold">✓</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-stone-900">Secure Payment</h3>
                                        <p className="text-sm text-stone-600">Your payment information is encrypted and secure</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-emerald-700 text-sm font-bold">✓</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-stone-900">Fast Checkout</h3>
                                        <p className="text-sm text-stone-600">Complete your purchase in just a few clicks</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-emerald-700 text-sm font-bold">✓</span>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-stone-900">Multiple Payment Methods</h3>
                                        <p className="text-sm text-stone-600">Credit cards, debit cards, and more</p>
                                    </div>
                                </div>
                            </div>

                            {error && (
                                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                                    <p className="text-red-800 text-sm">{error}</p>
                                </div>
                            )}

                            <button
                                onClick={handleStripeCheckout}
                                disabled={isProcessing}
                                className="w-full bg-emerald-700 hover:bg-emerald-800 disabled:bg-stone-400 text-white py-4 rounded-full font-semibold transition-colors flex items-center justify-center gap-2"
                            >
                                <Lock className="w-5 h-5" />
                                {isProcessing ? "Processing..." : `Pay $${getTotalPrice().toFixed(2)} with Stripe`}
                            </button>

                            <p className="text-xs text-stone-500 text-center mt-4">
                                🔒 Powered by Stripe - Your payment information is secure
                            </p>
                        </div>

                        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
                            <h3 className="font-semibold text-emerald-900 mb-2">Why Stripe?</h3>
                            <ul className="text-sm text-emerald-800 space-y-1">
                                <li>• Trusted by millions of businesses worldwide</li>
                                <li>• Bank-level security and encryption</li>
                                <li>• Fast and reliable payment processing</li>
                                <li>• Buyer protection included</li>
                            </ul>
                        </div>
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
