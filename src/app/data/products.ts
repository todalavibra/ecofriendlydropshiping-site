/**
 * Represents a product in the eco-friendly store.
 */
export interface Product {
    /** The unique identifier for the product. */
    id: string;
    /** The display name of the product. */
    name: string;
    /** A detailed description of the product. */
    description: string;
    /** The price of the product in USD. */
    price: number;
    /** The URL of the product image. */
    image: string;
    /** The category the product belongs to (e.g., 'Personal Care', 'Kitchen'). */
    category: string;
}

/**
 * A static list of eco-friendly products available in the store.
 * This simulates a database of products.
 */
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
    },
    {
        id: "p9",
        name: "Organic Shampoo Bar",
        description: "Zero-waste hair care. Lasts 2-3x longer than bottled shampoo. Made with organic coconut oil and essential oils.",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=2670&auto=format&fit=crop",
        category: "Personal Care"
    },
    {
        id: "p10",
        name: "Reusable Produce Bags",
        description: "Set of 6 mesh bags in 3 sizes. Perfect for grocery shopping. Machine washable and ultra-lightweight.",
        price: 16.00,
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=2736&auto=format&fit=crop",
        category: "Kitchen"
    },
    {
        id: "p11",
        name: "Cork Yoga Mat",
        description: "Natural cork surface with natural rubber base. Non-toxic, antimicrobial, and provides excellent grip.",
        price: 68.00,
        image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?q=80&w=2680&auto=format&fit=crop",
        category: "Fitness"
    },
    {
        id: "p12",
        name: "Stainless Steel Straws",
        description: "Set of 4 reusable straws with cleaning brush. Dishwasher safe. Say goodbye to plastic straws forever.",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1528301721190-1d24a1bb0a83?q=80&w=2670&auto=format&fit=crop",
        category: "On The Go"
    },
    {
        id: "p13",
        name: "Hemp Backpack",
        description: "Durable, water-resistant hemp canvas. Multiple compartments. Perfect for daily commute or hiking.",
        price: 54.00,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=2574&auto=format&fit=crop",
        category: "Accessories"
    },
    {
        id: "p14",
        name: "Bamboo Fiber Towels",
        description: "Set of 2 ultra-soft, quick-dry towels. More absorbent than cotton. Naturally antibacterial.",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1631889993959-41b4e9c6e3c5?q=80&w=2574&auto=format&fit=crop",
        category: "Home"
    },
    {
        id: "p15",
        name: "Natural Deodorant",
        description: "Aluminum-free, vegan formula. Comes in a compostable cardboard tube. Fresh lavender scent.",
        price: 11.50,
        image: "https://images.unsplash.com/photo-1615397349754-5db1d9c8c5e0?q=80&w=2574&auto=format&fit=crop",
        category: "Personal Care"
    },
    {
        id: "p16",
        name: "Recycled Notebook Set",
        description: "3-pack of A5 notebooks made from 100% recycled paper. Perfect for journaling or note-taking.",
        price: 18.00,
        image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=2670&auto=format&fit=crop",
        category: "Office"
    }
];
