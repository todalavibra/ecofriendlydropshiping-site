import Image from "next/image";
import { ArrowRight, Leaf, Truck, ShieldCheck, Heart } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-stone-100">
        <div className="text-2xl font-bold text-emerald-800 flex items-center gap-2">
          <Leaf className="w-6 h-6" />
          EcoDrop
        </div>
        <button className="bg-emerald-700 hover:bg-emerald-800 text-white px-5 py-2 rounded-full transition-colors text-sm font-medium">
          Shop Now
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-black/30 z-10" />
           {/* Placeholder for hero image */}
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
            Sustainable Living, <br/> Simplified.
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
      <section className="py-20 bg-stone-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-emerald-950">Trending Now</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="relative h-64 bg-stone-200 overflow-hidden">
                 <Image
                  src="https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?q=80&w=2669&auto=format&fit=crop"
                  alt="Bamboo Toothbrush"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                 />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-stone-800">Bamboo Essentials Kit</h3>
                <p className="text-stone-500 mb-4 text-sm">Start your zero-waste journey with our premium bamboo set.</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-emerald-700">$24.99</span>
                  <button className="text-emerald-600 font-medium hover:text-emerald-800">Add to Cart</button>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="relative h-64 bg-stone-200 overflow-hidden">
                 <Image
                  src="https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?q=80&w=2670&auto=format&fit=crop"
                  alt="Reusable Bottle"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                 />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-stone-800">Thermal Steel Bottle</h3>
                <p className="text-stone-500 mb-4 text-sm">Keep drinks cold for 24h or hot for 12h. Plastic-free.</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-emerald-700">$32.00</span>
                  <button className="text-emerald-600 font-medium hover:text-emerald-800">Add to Cart</button>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
              <div className="relative h-64 bg-stone-200 overflow-hidden">
                 <Image
                  src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=2574&auto=format&fit=crop"
                  alt="Organic Cotton Tote"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                 />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-stone-800">Organic Cotton Tote</h3>
                <p className="text-stone-500 mb-4 text-sm">Durable, washable, and 100% organic cotton canvas.</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-emerald-700">$18.50</span>
                  <button className="text-emerald-600 font-medium hover:text-emerald-800">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
             <button className="border-2 border-emerald-800 text-emerald-800 px-8 py-3 rounded-full font-semibold hover:bg-emerald-50 transition-colors">
               View All Products
             </button>
          </div>
        </div>
      </section>

      {/* Newsletter / Footer */}
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
              <li><a href="#" className="hover:text-white transition-colors">All Products</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gift Cards</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-12 pt-8 border-t border-emerald-900 text-center text-sm text-emerald-400">
          © {new Date().getFullYear()} EcoDrop. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
