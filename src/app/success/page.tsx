import Link from "next/link";
import { CheckCircle, Package, Leaf } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SuccessPage() {
    return (
        <div className="min-h-screen bg-stone-50">
            <Navbar />

            <div className="container mx-auto px-4 py-20">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="mb-8">
                        <CheckCircle className="w-24 h-24 text-emerald-600 mx-auto mb-6" />
                        <h1 className="text-4xl font-bold text-stone-900 mb-4">Order Confirmed!</h1>
                        <p className="text-xl text-stone-600 mb-2">Thank you for your purchase</p>
                        <p className="text-stone-500">You&apos;ll receive a confirmation email shortly.</p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 mb-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                            <div className="flex items-start gap-4">
                                <Package className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-stone-900 mb-1">Free Shipping</h3>
                                    <p className="text-sm text-stone-600">Your order will arrive in 5-7 business days</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Leaf className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-stone-900 mb-1">Tree Planted</h3>
                                    <p className="text-sm text-stone-600">We&apos;ve planted a tree on your behalf!</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/#products"
                            className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded-full font-semibold transition-colors"
                        >
                            Continue Shopping
                        </Link>
                        <Link
                            href="/"
                            className="border-2 border-stone-300 text-stone-700 px-8 py-3 rounded-full font-semibold hover:bg-stone-50 transition-colors"
                        >
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
