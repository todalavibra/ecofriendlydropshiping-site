import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../page';
import { products } from '../data/products';
import { useCartStore } from '@/store/cartStore';

// Mock the store
jest.mock('@/store/cartStore');

// Mock Image
jest.mock('next/image', () => ({
    __esModule: true,
    default: (props: any) => <img {...props} />,
}));

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
        });
        mockAddItem.mockClear();
        mockOpenCart.mockClear();
        mockGetTotalItems.mockClear();
    });

    it('should render the hero section', () => {
        render(<Home />);
        expect(screen.getByText('Eco-Friendly Dropshipping')).toBeInTheDocument();
        expect(screen.getByText('Sustainable products for a better future.')).toBeInTheDocument();
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
