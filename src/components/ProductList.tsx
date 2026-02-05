import type { Product, CartItem } from '../types';
import { ProductCard } from './ProductCard';
import './ProductList.css';

interface ProductListProps {
    products: Product[];
    cart: CartItem[];
    addToCart: (product: Product) => void;
    updateQuantity: (name: string, delta: number) => void;
}

export const ProductList = ({ products, cart, addToCart, updateQuantity }: ProductListProps) => {
    return (
        <div className="product-list">
            {products.map((product) => {
                const cartItem = cart.find((item) => item.name === product.name);
                const quantity = cartItem ? cartItem.quantity : 0;

                return (
                    <ProductCard
                        key={product.name}
                        product={product}
                        quantity={quantity}
                        onAddToCart={() => addToCart(product)}
                        onIncrement={() => updateQuantity(product.name, 1)}
                        onDecrement={() => updateQuantity(product.name, -1)}
                    />
                );
            })}
        </div>
    );
};
