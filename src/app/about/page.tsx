import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Leaf, Globe, Recycle } from "lucide-react";

export default function About() {
    return (
        <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-emerald-900/60 z-10" />
                    <Image
                        src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2574&auto=format&fit=crop"
                        alt="Forest nature"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
                        Our Mission
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 text-stone-100 max-w-2xl mx-auto">
                        We believe that small choices can lead to big changes.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose prose-lg prose-stone mx-auto">
                        <h2 className="text-3xl font-bold text-emerald-900 mb-6">Why EcoDrop?</h2>
                        <p className="mb-6 text-stone-600 leading-relaxed">
                            In a world overflowing with single-use plastic and fast fashion, we wanted to create a sanctuary for conscious consumers. EcoDrop was born out of a frustration with the status quo and a deep love for our planet.
                        </p>
                        <p className="mb-6 text-stone-600 leading-relaxed">
                            We carefully curate every product in our store, ensuring it meets strict sustainability criteria. From sourcing to shipping, we prioritize the environment at every step. We are not just a store; we are a movement towards a greener, cleaner future.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section id="sustainability" className="py-20 bg-stone-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-emerald-900 mb-16">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-700">
                                <Leaf className="w-10 h-10" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-emerald-800">Sustainability First</h3>
                            <p className="text-stone-600">Every decision we make is filtered through the lens of environmental impact.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-700">
                                <Recycle className="w-10 h-10" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-emerald-800">Circular Economy</h3>
                            <p className="text-stone-600">We support products that are biodegradable, compostable, or infinitely recyclable.</p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-700">
                                <Globe className="w-10 h-10" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 text-emerald-800">Global Impact</h3>
                            <p className="text-stone-600">We partner with ethical suppliers worldwide to support fair labor and community growth.</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
