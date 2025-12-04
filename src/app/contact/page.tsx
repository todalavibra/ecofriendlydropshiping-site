"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactPage() {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');
        
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));
        setFormStatus('success');
    };

    return (
        <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="bg-emerald-900 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
                    <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
                        Have a question about our products or your order? We're here to help.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl font-bold text-emerald-900 mb-8">Contact Information</h2>
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 flex-shrink-0">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-stone-900 mb-1">Email Us</h3>
                                    <p className="text-stone-600 mb-2">For general inquiries and support:</p>
                                    <a href="mailto:support@ecodrop.com" className="text-emerald-700 font-semibold hover:underline">
                                        support@ecodrop.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 flex-shrink-0">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-stone-900 mb-1">Call Us</h3>
                                    <p className="text-stone-600 mb-2">Mon-Fri from 9am to 5pm EST:</p>
                                    <a href="tel:+15551234567" className="text-emerald-700 font-semibold hover:underline">
                                        +1 (555) 123-4567
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 flex-shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg text-stone-900 mb-1">Our Office</h3>
                                    <p className="text-stone-600">
                                        123 Sustainable Way<br />
                                        Green City, EC 90210<br />
                                        United States
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 p-8 bg-emerald-50 rounded-2xl border border-emerald-100">
                            <h3 className="font-bold text-xl text-emerald-900 mb-4">FAQ</h3>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold text-emerald-800">Where do you ship?</h4>
                                    <p className="text-stone-600 text-sm">We ship worldwide using carbon-neutral shipping partners.</p>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-emerald-800">What is your return policy?</h4>
                                    <p className="text-stone-600 text-sm">We offer a 30-day return policy for all unused items in original packaging.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-stone-100">
                        <h2 className="text-2xl font-bold text-stone-900 mb-6">Send us a Message</h2>
                        
                        {formStatus === 'success' ? (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Send className="w-8 h-8" />
                                </div>
                                <h3 className="text-2xl font-bold text-stone-900 mb-2">Message Sent!</h3>
                                <p className="text-stone-600 mb-6">We'll get back to you as soon as possible.</p>
                                <button 
                                    onClick={() => setFormStatus('idle')}
                                    className="text-emerald-700 font-semibold hover:underline"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium text-stone-700 mb-2">First Name</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            required
                                            className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                                            placeholder="John"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium text-stone-700 mb-2">Last Name</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            required
                                            className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                                            placeholder="Doe"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-2">Subject</label>
                                    <select
                                        id="subject"
                                        className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all bg-white"
                                    >
                                        <option>General Inquiry</option>
                                        <option>Order Support</option>
                                        <option>Returns & Exchanges</option>
                                        <option>Wholesale</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={formStatus === 'submitting'}
                                    className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.01] shadow-md disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                                    {!formStatus && <Send className="w-5 h-5" />}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
