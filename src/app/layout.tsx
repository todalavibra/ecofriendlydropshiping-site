import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleTagManager } from '@next/third-parties/google'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

/**
 * Metadata for the application, including SEO tags and Open Graph information.
 */
export const metadata: Metadata = {
    title: "EcoDrop | Sustainable Living & Eco-Friendly Products",
    description: "Discover a curated collection of eco-friendly, zero-waste, and sustainable products. Shop responsibly for a greener future with EcoDrop.",
    keywords: ["eco-friendly", "sustainable", "zero waste", "plastic free", "organic", "bamboo", "dropshipping"],
    openGraph: {
        title: "EcoDrop | Sustainable Living",
        description: "Shop the best eco-friendly products for a sustainable lifestyle.",
        url: "https://ecofriendlydropshipping.com",
        siteName: "EcoDrop",
        images: [
            {
                url: "https://images.unsplash.com/photo-1542601906990-b4d3fb7d5fa5?q=80&w=2626&auto=format&fit=crop",
                width: 1200,
                height: 630,
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "EcoDrop | Sustainable Living",
        description: "Shop the best eco-friendly products for a sustainable lifestyle.",
        images: ["https://images.unsplash.com/photo-1542601906990-b4d3fb7d5fa5?q=80&w=2626&auto=format&fit=crop"],
    },
};

/**
 * The root layout component for the application.
 *
 * This component wraps all pages and provides the base HTML structure,
 * global font styles, and Google Tag Manager integration.
 *
 * @param props - Component properties.
 * @param props.children - The child components (pages) to be rendered.
 * @returns The root layout structure.
 */
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <GoogleTagManager gtmId="GTM-NZKNFVN9" />
            <body className={inter.className}>
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-NZKNFVN9"
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    />
                </noscript>
                {children}
            </body>
        </html>
    );
}
