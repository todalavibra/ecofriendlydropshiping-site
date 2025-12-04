export { };

/**
 * Global type declarations.
 */
declare global {
    /**
     * Interface extending the Window object.
     */
    interface Window {
        /**
         * Google Tag Manager data layer.
         * Used for tracking events and analytics.
         */
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        dataLayer: any[];
    }
}
