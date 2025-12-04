import { act } from '@testing-library/react';
import { useCartStore } from '../cartStore';

// Mock persist middleware
jest.mock('zustand/middleware', () => ({
  persist: (config: any) => (set: any, get: any, api: any) => config(set, get, api),
}));

describe('Cart Store', () => {
  const initialState = useCartStore.getState();

  beforeEach(() => {
    useCartStore.setState(initialState, true);
  });

  it('should start with an empty cart', () => {
    const { items, isOpen } = useCartStore.getState();
    expect(items).toEqual([]);
    expect(isOpen).toBe(false);
  });

  it('should add an item to the cart', () => {
    const item = {
      id: '1',
      name: 'Test Item',
      price: 10,
      image: 'test.jpg',
    };

    act(() => {
      useCartStore.getState().addItem(item);
    });

    const { items } = useCartStore.getState();
    expect(items).toHaveLength(1);
    expect(items[0]).toEqual({ ...item, quantity: 1 });
  });

  it('should increment quantity if item already exists', () => {
    const item = {
      id: '1',
      name: 'Test Item',
      price: 10,
      image: 'test.jpg',
    };

    act(() => {
        useCartStore.getState().addItem(item);
        useCartStore.getState().addItem(item);
    });

    const { items } = useCartStore.getState();
    expect(items).toHaveLength(1);
    expect(items[0].quantity).toBe(2);
  });

  it('should remove an item from the cart', () => {
    const item = {
      id: '1',
      name: 'Test Item',
      price: 10,
      image: 'test.jpg',
    };

    act(() => {
        useCartStore.getState().addItem(item);
        useCartStore.getState().removeItem('1');
    });

    const { items } = useCartStore.getState();
    expect(items).toHaveLength(0);
  });

  it('should update item quantity', () => {
    const item = {
      id: '1',
      name: 'Test Item',
      price: 10,
      image: 'test.jpg',
    };

    act(() => {
        useCartStore.getState().addItem(item);
        useCartStore.getState().updateQuantity('1', 5);
    });

    const { items } = useCartStore.getState();
    expect(items[0].quantity).toBe(5);
  });

  it('should remove item if quantity updated to 0', () => {
    const item = {
      id: '1',
      name: 'Test Item',
      price: 10,
      image: 'test.jpg',
    };

    act(() => {
        useCartStore.getState().addItem(item);
        useCartStore.getState().updateQuantity('1', 0);
    });

    const { items } = useCartStore.getState();
    expect(items).toHaveLength(0);
  });

  it('should clear the cart', () => {
      const item = {
      id: '1',
      name: 'Test Item',
      price: 10,
      image: 'test.jpg',
    };

    act(() => {
        useCartStore.getState().addItem(item);
        useCartStore.getState().clearCart();
    });

    const { items } = useCartStore.getState();
    expect(items).toHaveLength(0);
  });

  it('should toggle cart open state', () => {
    act(() => {
        useCartStore.getState().toggleCart();
    });
    expect(useCartStore.getState().isOpen).toBe(true);

    act(() => {
        useCartStore.getState().toggleCart();
    });
    expect(useCartStore.getState().isOpen).toBe(false);
  });

    it('should calculate total items', () => {
    const item1 = { id: '1', name: 'Item 1', price: 10, image: '1.jpg' };
    const item2 = { id: '2', name: 'Item 2', price: 20, image: '2.jpg' };

    act(() => {
        useCartStore.getState().addItem(item1);
        useCartStore.getState().addItem(item1); // quantity 2
        useCartStore.getState().addItem(item2); // quantity 1
    });

    expect(useCartStore.getState().getTotalItems()).toBe(3);
  });

  it('should calculate total price', () => {
    const item1 = { id: '1', name: 'Item 1', price: 10, image: '1.jpg' };
    const item2 = { id: '2', name: 'Item 2', price: 20, image: '2.jpg' };

    act(() => {
        useCartStore.getState().addItem(item1);
        useCartStore.getState().addItem(item1); // 2 * 10 = 20
        useCartStore.getState().addItem(item2); // 1 * 20 = 20
    });

    expect(useCartStore.getState().getTotalPrice()).toBe(40);
  });
});
