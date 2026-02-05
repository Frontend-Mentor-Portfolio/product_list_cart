import type { CartItem } from '../types';
import './ConfirmationModal.css';

interface ConfirmationModalProps {
    cart: CartItem[];
    total: number;
    onNewOrder: () => void;
}

export const ConfirmationModal = ({ cart, total, onNewOrder }: ConfirmationModalProps) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <img src="./assets/images/icon-order-confirmed.svg" alt="Order Confirmed" className="confirmed-icon" />
                <h2 className="modal-title">Order Confirmed</h2>
                <p className="modal-subtitle">We hope you enjoy your food!</p>

                <div className="order-summary">
                    <ul className="summary-list">
                        {cart.map((item) => (
                            <li key={item.name} className="summary-item">
                                <div className="summary-item-left">
                                    <img src={item.image.thumbnail} alt={item.name} className="summary-thumbnail" />
                                    <div className="summary-details">
                                        <span className="summary-name">{item.name}</span>
                                        <div className="summary-price-qa">
                                            <span className="summary-quantity">{item.quantity}x</span>
                                            <span className="summary-price">@ ${item.price.toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>
                                <span className="summary-total">${(item.price * item.quantity).toFixed(2)}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="summary-total-row">
                        <span>Order Total</span>
                        <span className="grand-total">${total.toFixed(2)}</span>
                    </div>
                </div>

                <button className="new-order-btn" onClick={onNewOrder}>
                    Start New Order
                </button>
            </div>
        </div>
    );
};
