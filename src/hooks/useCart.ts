import { useState } from 'react';
import type { Product, CartItem } from '../types';

export const useCart = () => {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (product: Product) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.name === product.name);
            if (existing) {
                return prev.map((item) =>
                    item.name === product.name
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (productName: string) => {
        setCart((prev) => prev.filter((item) => item.name !== productName));
    };

    const updateQuantity = (productName: string, delta: number) => {
        setCart((prev) => {
            return prev.map((item) => {
                if (item.name === productName) {
                    const newQuantity = item.quantity + delta;
                    return { ...item, quantity: Math.max(0, newQuantity) };
                }
                return item;
            }).filter((item) => item.quantity > 0);
        });
    };

    const clearCart = () => setCart([]);

    const getCartTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const getCartCount = () => {
        return cart.reduce((count, item) => count + item.quantity, 0);
    };

    return {
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartCount,
    };
};
