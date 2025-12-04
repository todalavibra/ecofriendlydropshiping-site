import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/**
 * Represents an item in the shopping cart.
 */
export interface CartItem {
    /** The unique identifier for the product. */
    id: string;
    /** The name of the product. */
    name: string;
    /** The price of the product per unit. */
    price: number;
    /** The URL of the product image. */
    image: string;
    /** The quantity of the product in the cart. */
    quantity: number;
}

/**
 * Interface defining the state and actions of the cart store.
 */
interface CartStore {
    /** The list of items currently in the cart. */
    items: CartItem[];
    /** Whether the cart sidebar is currently open. */
    isOpen: boolean;
    /**
     * Adds a product to the cart. If the product already exists, increments its quantity.
     * @param item - The product to add (excluding quantity).
     */
    addItem: (item: Omit<CartItem, 'quantity'>) => void;
    /**
     * Removes a product from the cart by its ID.
     * @param id - The unique identifier of the product to remove.
     */
    removeItem: (id: string) => void;
    /**
     * Updates the quantity of a specific product in the cart.
     * If the quantity is set to 0 or less, the item is removed.
     * @param id - The unique identifier of the product.
     * @param quantity - The new quantity.
     */
    updateQuantity: (id: string, quantity: number) => void;
    /**
     * Removes all items from the cart.
     */
    clearCart: () => void;
    /**
     * Toggles the visibility of the cart sidebar.
     */
    toggleCart: () => void;
    /**
     * Opens the cart sidebar.
     */
    openCart: () => void;
    /**
     * Closes the cart sidebar.
     */
    closeCart: () => void;
    /**
     * Calculates the total number of items in the cart.
     * @returns The sum of quantities of all items.
     */
    getTotalItems: () => number;
    /**
     * Calculates the total price of all items in the cart.
     * @returns The total cost of the items.
     */
    getTotalPrice: () => number;
}

/**
 * Zustand store hook for managing shopping cart state.
 *
 * This store handles cart items, visibility state of the cart sidebar,
 * and persistence using local storage.
 */
export const useCartStore = create<CartStore>()(
    persist(
        (set, get) => ({
            items: [],
            isOpen: false,

            addItem: (item) => {
                const items = get().items;
                const existingItem = items.find((i) => i.id === item.id);

                if (existingItem) {
                    set({
                        items: items.map((i) =>
                            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                        ),
                    });
                } else {
                    set({ items: [...items, { ...item, quantity: 1 }] });
                }
            },

            removeItem: (id) => {
                set({ items: get().items.filter((i) => i.id !== id) });
            },

            updateQuantity: (id, quantity) => {
                if (quantity <= 0) {
                    get().removeItem(id);
                } else {
                    set({
                        items: get().items.map((i) =>
                            i.id === id ? { ...i, quantity } : i
                        ),
                    });
                }
            },

            clearCart: () => set({ items: [] }),

            toggleCart: () => set({ isOpen: !get().isOpen }),
            openCart: () => set({ isOpen: true }),
            closeCart: () => set({ isOpen: false }),

            getTotalItems: () => {
                return get().items.reduce((total, item) => total + item.quantity, 0);
            },

            getTotalPrice: () => {
                return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
            },
        }),
        {
            name: 'cart-storage',
        }
    )
);
