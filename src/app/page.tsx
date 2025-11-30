"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Truck, ShieldCheck, Heart } from "lucide-react";
import { products } from "./data/products";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartSidebar from "@/components/CartSidebar";
import { useCartStore } from "@/store/cartStore";

export default function Home() {
  const { addItem, openCart } = useCartStore();

  const handleAddToCart = (productId: string, productName: string, productPrice: number, productImage: string) => {
    addItem({
      id: productId,
      name: productName,
      price: productPrice,
      image: productImage
    });

    // Push event to dataLayer for GTM
    if (typeof window !== 'undefined') {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: 'add_to_cart',
        ecommerce: {
          currency: 'USD',
          value: productPrice,
          items: [{
            item_name: productName,
            price: productPrice
          }]
        }
      });
    }

    // Open cart sidebar
    openCart();
  };

  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
      <Navbar />
      <CartSidebar />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/30 z-10" />
          <div className="w-full h-full bg-emerald-900" />
          <Image
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb7d5fa5?q=80&w=2626&auto=format&fit=crop"
            alt="Eco-friendly lifestyle"
            fill
            className="object-cover opacity-80"
            priority
          />
        </div>

        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Sustainable Living, <br /> Simplified.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-stone-100 max-w-2xl mx-auto">
            Discover a curated collection of eco-friendly products that are good for you and the planet.
          </p>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white text-lg px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 flex items-center gap-2 mx-auto">
            Shop Our Collection <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center p-6 rounded-2xl bg-stone-50 hover:bg-stone-100 transition-colors">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 text-emerald-700">
                <Truck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-emerald-900">Carbon Neutral Shipping</h3>
              <p className="text-stone-600">We offset 100% of carbon emissions from every delivery.</p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-2xl bg-stone-50 hover:bg-stone-100 transition-colors">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 text-emerald-700">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-emerald-900">Verified Sustainable</h3>
              <p className="text-stone-600">Every product is vetted for environmental impact and ethics.</p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-2xl bg-stone-50 hover:bg-stone-100 transition-colors">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4 text-emerald-700">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-emerald-900">Give Back</h3>
              <p className="text-stone-600">We plant a tree for every order placed on our store.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section id="products" className="py-20 bg-stone-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-emerald-950">Trending Now</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col"
              >
                <div className="relative h-64 bg-stone-200 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-xs font-bold text-emerald-600 mb-2 uppercase tracking-wider">{product.category}</div>
                  <h3 className="text-xl font-semibold mb-2 text-stone-800">{product.name}</h3>
                  <p className="text-stone-500 mb-4 text-sm flex-grow">{product.description}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-100">
                    <span className="text-lg font-bold text-emerald-700">${product.price.toFixed(2)}</span>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleAddToCart(product.id, product.name, product.price, product.image);
                      }}
                      className="text-emerald-600 font-medium hover:text-emerald-800 hover:bg-emerald-50 px-3 py-1 rounded-lg transition-colors"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="border-2 border-emerald-800 text-emerald-800 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-colors">
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials / Social Proof */}
      <section className="py-20 bg-emerald-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-emerald-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-600 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold text-center mb-16">Loved by Earth Lovers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-emerald-800/50 backdrop-blur-sm p-8 rounded-2xl border border-emerald-700">
              <div className="flex text-yellow-400 mb-4">
                {"★★★★★".split("").map((star, i) => <span key={i}>{star}</span>)}
              </div>
              <p className="text-emerald-100 mb-6 italic">"I love my bamboo essentials kit! The quality is amazing and it feels so good to finally ditch plastic toothbrushes. Shipping was super fast too."</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-emerald-200 rounded-full flex items-center justify-center text-emerald-900 font-bold">SJ</div>
                <div>
                  <div className="font-bold">Sarah Jenkins</div>
                  <div className="text-xs text-emerald-300">Verified Buyer</div>
                </div>
              </div>
            </div>
            <div className="bg-emerald-800/50 backdrop-blur-sm p-8 rounded-2xl border border-emerald-700">
              <div className="flex text-yellow-400 mb-4">
                {"★★★★★".split("").map((star, i) => <span key={i}>{star}</span>)}
              </div>
              <p className="text-emerald-100 mb-6 italic">"The thermal bottle is a game changer. Keeps my water ice cold all day, even in the hot sun. Highly recommend EcoDrop for sustainable finds."</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-emerald-200 rounded-full flex items-center justify-center text-emerald-900 font-bold">MR</div>
                <div>
                  <div className="font-bold">Mike Ross</div>
                  <div className="text-xs text-emerald-300">Verified Buyer</div>
                </div>
              </div>
            </div>
            <div className="bg-emerald-800/50 backdrop-blur-sm p-8 rounded-2xl border border-emerald-700">
              <div className="flex text-yellow-400 mb-4">
                {"★★★★★".split("").map((star, i) => <span key={i}>{star}</span>)}
              </div>
              <p className="text-emerald-100 mb-6 italic">"Finally, a store that actually cares about packaging! Everything came in compostable mailers. Will definitely be ordering again."</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-emerald-200 rounded-full flex items-center justify-center text-emerald-900 font-bold">EL</div>
                <div>
                  <div className="font-bold">Emma Lee</div>
                  <div className="text-xs text-emerald-300">Verified Buyer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
