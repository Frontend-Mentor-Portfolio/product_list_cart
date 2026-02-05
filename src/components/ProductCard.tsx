import type { Product } from '../types';
import './ProductCard.css';

interface ProductCardProps {
    product: Product;
    quantity: number;
    onAddToCart: () => void;
    onIncrement: () => void;
    onDecrement: () => void;
}

export const ProductCard = ({ product, quantity, onAddToCart, onIncrement, onDecrement }: ProductCardProps) => {
    return (
        <div className="product-card">
            <div className="image-container">
                <picture>
                    <source media="(min-width: 1024px)" srcSet={product.image.desktop} />
                    <source media="(min-width: 768px)" srcSet={product.image.tablet} />
                    <img
                        src={product.image.mobile}
                        alt={product.name}
                        className={`product-image ${quantity > 0 ? 'active' : ''}`}
                    />
                </picture>

                {quantity === 0 ? (
                    <button className="add-to-cart-btn" onClick={onAddToCart}>
                        <img src="./assets/images/icon-add-to-cart.svg" alt="" />
                        Add to Cart
                    </button>
                ) : (
                    <div className="quantity-controls">
                        <button className="control-btn" onClick={(e) => { e.stopPropagation(); onDecrement(); }}>
                            <img src="./assets/images/icon-decrement-quantity.svg" alt="Decrease quantity" />
                        </button>
                        <span className="quantity-text">{quantity}</span>
                        <button className="control-btn" onClick={(e) => { e.stopPropagation(); onIncrement(); }}>
                            <img src="./assets/images/icon-increment-quantity.svg" alt="Increase quantity" />
                        </button>
                    </div>
                )}
            </div>

            <div className="product-info">
                <p className="category">{product.category}</p>
                <h3 className="name">{product.name}</h3>
                <p className="price">${product.price.toFixed(2)}</p>
            </div>
        </div>
    );
};
