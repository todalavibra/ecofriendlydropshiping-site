import { render, screen, fireEvent } from '@testing-library/react';
import CartSidebar from '../CartSidebar';
import { useCartStore } from '../../store/cartStore';

/**
 * Test suite for the CartSidebar component.
 *
 * Tests the visibility of the sidebar, rendering of empty and populated states,
 * and user interactions such as updating quantities, removing items, and closing the cart.
 */

// Mock the store
jest.mock('../../store/cartStore');

// Mock Image component since it's hard to test in jsdom
jest.mock('next/image', () => ({
    __esModule: true,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, jsx-a11y/alt-text, @next/next/no-img-element
    default: (props: any) => <img {...props} />,
}));

describe('CartSidebar', () => {
    const mockUseCartStore = useCartStore as unknown as jest.Mock;

    beforeEach(() => {
        mockUseCartStore.mockReturnValue({
            items: [],
            isOpen: false,
            closeCart: jest.fn(),
            updateQuantity: jest.fn(),
            removeItem: jest.fn(),
            getTotalPrice: jest.fn().mockReturnValue(0),
        });
    });

    it('should not render when not open', () => {
        const { container } = render(<CartSidebar />);
        expect(container).toBeEmptyDOMElement();
    });

    it('should render when open', () => {
        mockUseCartStore.mockReturnValue({
            items: [],
            isOpen: true,
            closeCart: jest.fn(),
            updateQuantity: jest.fn(),
            removeItem: jest.fn(),
            getTotalPrice: jest.fn().mockReturnValue(0),
        });

        render(<CartSidebar />);
        expect(screen.getByText('Your Cart')).toBeInTheDocument();
        expect(screen.getByText('Your cart is empty')).toBeInTheDocument();
    });

    it('should render items in the cart', () => {
        const items = [
            { id: '1', name: 'Test Item 1', price: 10, image: '/test1.jpg', quantity: 1 },
            { id: '2', name: 'Test Item 2', price: 20, image: '/test2.jpg', quantity: 2 },
        ];

        mockUseCartStore.mockReturnValue({
            items,
            isOpen: true,
            closeCart: jest.fn(),
            updateQuantity: jest.fn(),
            removeItem: jest.fn(),
            getTotalPrice: jest.fn().mockReturnValue(50),
        });

        render(<CartSidebar />);
        expect(screen.getByText('Test Item 1')).toBeInTheDocument();
        expect(screen.getByText('Test Item 2')).toBeInTheDocument();
        expect(screen.getByText('$50.00')).toBeInTheDocument(); // Subtotal
    });

    it('should call updateQuantity when increment/decrement buttons are clicked', () => {
        const items = [
            { id: '1', name: 'Test Item 1', price: 10, image: '/test1.jpg', quantity: 1 },
        ];
        const updateQuantity = jest.fn();

        mockUseCartStore.mockReturnValue({
            items,
            isOpen: true,
            closeCart: jest.fn(),
            updateQuantity,
            removeItem: jest.fn(),
            getTotalPrice: jest.fn().mockReturnValue(10),
        });

        render(<CartSidebar />);

        const decreaseBtn = screen.getByLabelText('Decrease quantity');
        fireEvent.click(decreaseBtn);
        expect(updateQuantity).toHaveBeenCalledWith('1', 0);

        const increaseBtn = screen.getByLabelText('Increase quantity');
        fireEvent.click(increaseBtn);
        expect(updateQuantity).toHaveBeenCalledWith('1', 2);
    });

    it('should call removeItem when remove button is clicked', () => {
        const items = [
            { id: '1', name: 'Test Item 1', price: 10, image: '/test1.jpg', quantity: 1 },
        ];
        const removeItem = jest.fn();

        mockUseCartStore.mockReturnValue({
            items,
            isOpen: true,
            closeCart: jest.fn(),
            updateQuantity: jest.fn(),
            removeItem,
            getTotalPrice: jest.fn().mockReturnValue(10),
        });

        render(<CartSidebar />);

        const removeBtn = screen.getByLabelText('Remove item');
        fireEvent.click(removeBtn);
        expect(removeItem).toHaveBeenCalledWith('1');
    });

    it('should call closeCart when clicking close button', () => {
        const closeCart = jest.fn();
        mockUseCartStore.mockReturnValue({
            items: [],
            isOpen: true,
            closeCart,
            updateQuantity: jest.fn(),
            removeItem: jest.fn(),
            getTotalPrice: jest.fn().mockReturnValue(0),
        });

        render(<CartSidebar />);

        const closeBtn = screen.getByLabelText('Close cart');
        fireEvent.click(closeBtn);
        expect(closeCart).toHaveBeenCalled();
    });
});
