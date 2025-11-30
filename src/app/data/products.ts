export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
}

export const products: Product[] = [
    {
        id: "p1",
        name: "Bamboo Essentials Kit",
        description: "Start your zero-waste journey with our premium bamboo toothbrush, travel case, and charcoal floss.",
        price: 24.99,
        image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?q=80&w=2669&auto=format&fit=crop",
        category: "Personal Care"
    },
    {
        id: "p2",
        name: "Thermal Steel Bottle",
        description: "Double-walled vacuum insulation keeps drinks cold for 24h or hot for 12h. 100% plastic-free.",
        price: 32.00,
        image: "https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?q=80&w=2670&auto=format&fit=crop",
        category: "On The Go"
    },
    {
        id: "p3",
        name: "Organic Cotton Tote",
        description: "Heavy-duty, GOTS-certified organic cotton canvas tote. Perfect for groceries or daily carry.",
        price: 18.50,
        image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=2574&auto=format&fit=crop",
        category: "Accessories"
    },
    {
        id: "p4",
        name: "Beeswax Food Wraps",
        description: "Reusable, biodegradable alternative to plastic wrap. Made with organic cotton and sustainably harvested beeswax.",
        price: 15.99,
        image: "https://images.unsplash.com/photo-1626139576127-450cb76561e5?q=80&w=2670&auto=format&fit=crop",
        category: "Kitchen"
    },
    {
        id: "p5",
        name: "Solar Power Bank",
        description: "Charge your devices with the power of the sun. 20000mAh capacity, water-resistant, and perfect for outdoor adventures.",
        price: 45.00,
        image: "https://images.unsplash.com/photo-1624397640148-949b1732bb0a?q=80&w=2574&auto=format&fit=crop",
        category: "Tech"
    },
    {
        id: "p6",
        name: "Compostable Phone Case",
        description: "Protect your phone and the planet. 100% compostable, plant-based material that breaks down without leaving toxic residue.",
        price: 22.00,
        image: "https://images.unsplash.com/photo-1622445275576-721325763afe?q=80&w=2670&auto=format&fit=crop",
        category: "Accessories"
    },
    {
        id: "p7",
        name: "Silicone Food Bags",
        description: "Leakproof, freezer-safe, and infinitely reusable. The perfect alternative to single-use ziplock bags.",
        price: 19.99,
        image: "https://images.unsplash.com/photo-1611079830811-865dd442874a?q=80&w=2669&auto=format&fit=crop",
        category: "Kitchen"
    },
    {
        id: "p8",
        name: "Bamboo Cutlery Set",
        description: "Lightweight, durable, and travel-friendly. Includes fork, spoon, knife, straw, and cleaning brush in a canvas pouch.",
        price: 12.50,
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2670&auto=format&fit=crop",
        category: "On The Go"
    }
];
