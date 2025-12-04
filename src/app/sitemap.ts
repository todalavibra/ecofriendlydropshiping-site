import { MetadataRoute } from 'next';

/**
 * Generates the sitemap for the application.
 *
 * This function returns a list of URLs that should be indexed by search engines,
 * along with their modification frequency and priority.
 *
 * @returns A sitemap object compatible with Next.js MetadataRoute.Sitemap.
 */
export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://ecofriendlydropshipping.com';

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/checkout`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
    ];
}
