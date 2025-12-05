import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../page';
import { products } from '../data/products';
import { useCartStore } from '@/store/cartStore';

/**
 * Test suite for the Home Page.
 *
 * Tests the rendering of the home page, including the hero section and product list.
 * Verifies that clicking "Add to Cart" interacts with the store correctly.
 */

// Mock the store
jest.mock('@/store/cartStore');

describe('Home Page', () => {
    const mockUseCartStore = useCartStore as unknown as jest.Mock;
    const mockAddItem = jest.fn();
    const mockOpenCart = jest.fn();
    const mockGetTotalItems = jest.fn().mockReturnValue(0);

    beforeEach(() => {
        // Setup default mock return values
        mockUseCartStore.mockReturnValue({
            addItem: mockAddItem,
            openCart: mockOpenCart,
            getTotalItems: mockGetTotalItems,
            items: [], // Navbar might need this
            isOpen: false, // CartSidebar might need this
            closeCart: jest.fn(), // CartSidebar needs this
            updateQuantity: jest.fn(), // CartSidebar needs this
            removeItem: jest.fn(), // CartSidebar needs this
            getTotalPrice: jest.fn().mockReturnValue(0), // CartSidebar needs this
        });
        mockAddItem.mockClear();
        mockOpenCart.mockClear();
        mockGetTotalItems.mockClear();
    });

    it('should render the hero section', () => {
        render(<Home />);
        // Text updated in actual page component, need to match that
        // Using partial match because the text is split across lines with <br />
        expect(screen.getByText((content, element) => {
            return element?.tagName.toLowerCase() === 'h1' && content.includes('Sustainable Living,');
        })).toBeInTheDocument();
        expect(screen.getByText((content, element) => {
             return element?.tagName.toLowerCase() === 'h1' && content.includes('Simplified.');
        })).toBeInTheDocument();
    });

    it('should render all products', () => {
        render(<Home />);
        products.forEach(product => {
            expect(screen.getByText(product.name)).toBeInTheDocument();
        });
    });

    it('should add item to cart when "Add to Cart" is clicked', () => {
        render(<Home />);

        // Find all "Add to Cart" buttons
        const addButtons = screen.getAllByText('Add to Cart');

        // Click the first one
        fireEvent.click(addButtons[0]);

        expect(mockAddItem).toHaveBeenCalledWith({
            id: products[0].id,
            name: products[0].name,
            price: products[0].price,
            image: products[0].image,
        });
        expect(mockOpenCart).toHaveBeenCalled();
    });
});
