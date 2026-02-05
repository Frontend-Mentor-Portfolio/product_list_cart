import type { CartItem } from '../types';
import './Cart.css';

interface CartProps {
    cart: CartItem[];
    total: number;
    count: number;
    onRemove: (name: string) => void;
    onConfirm: () => void;
}

export const Cart = ({ cart, total, count, onRemove, onConfirm }: CartProps) => {
    return (
        <div className="cart-container">
            <h2 className="cart-title">Your Cart ({count})</h2>

            {count === 0 ? (
                <div className="empty-cart">
                    <img src="./assets/images/illustration-empty-cart.svg" alt="Empty Cart" />
                    <p>Your added items will appear here</p>
                </div>
            ) : (
                <>
                    <ul className="cart-items">
                        {cart.map((item) => (
                            <li key={item.name} className="cart-item">
                                <div className="item-details">
                                    <span className="item-name">{item.name}</span>
                                    <div className="item-price-info">
                                        <span className="item-quantity">{item.quantity}x</span>
                                        <span className="item-price">@ ${item.price.toFixed(2)}</span>
                                        <span className="item-total-price">${(item.price * item.quantity).toFixed(2)}</span>
                                    </div>
                                </div>
                                <button
                                    className="remove-btn"
                                    onClick={() => onRemove(item.name)}
                                    aria-label={`Remove ${item.name}`}
                                >
                                    <img src="./assets/images/icon-remove-item.svg" alt="" />
                                </button>
                            </li>
                        ))}
                    </ul>

                    <div className="cart-total">
                        <span>Order Total</span>
                        <span className="total-amount">${total.toFixed(2)}</span>
                    </div>

                    <div className="carbon-neutral">
                        <img src="./assets/images/icon-carbon-neutral.svg" alt="" />
                        <p>This is a <strong>carbon-neutral</strong> delivery</p>
                    </div>

                    <button className="confirm-order-btn" onClick={onConfirm}>
                        Confirm Order
                    </button>
                </>
            )}
        </div>
    );
};
