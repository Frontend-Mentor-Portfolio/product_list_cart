// import { useEffect, useState } from 'react';
import { useState } from 'react';
import './App.css';
import { ProductList } from './components/ProductList';
import { Cart } from './components/Cart';
import { ConfirmationModal } from './components/ConfirmationModal';
import { useCart } from './hooks/useCart';
import type { Product } from './types.ts';
import data from '../data.json';

function App() {
  const { cart, addToCart, updateQuantity, removeFromCart, clearCart, getCartTotal, getCartCount } = useCart();
  const [products] = useState<Product[]>(data);
  const [showModal, setShowModal] = useState(false);

  // useEffect(() => {
  //   fetch('/data.json')
  //     .then(res => res.json())
  //     .then(data => setProducts(data))
  //     .catch(err => console.error('Error loading data:', err));
  // }, []);

  return (
    <main className="app-container">
      <div className="product-section">
        <h1 className="page-title">Desserts</h1>
        <ProductList
          products={products}
          cart={cart}
          addToCart={addToCart}
          updateQuantity={updateQuantity}
        />
      </div>

      <div className="cart-section">
        <Cart
          cart={cart}
          total={getCartTotal()}
          count={getCartCount()}
          onRemove={removeFromCart}
          onConfirm={() => setShowModal(true)}
        />
      </div>

      {showModal && (
        <ConfirmationModal
          cart={cart}
          total={getCartTotal()}
          onNewOrder={() => { clearCart(); setShowModal(false); }}
        />
      )}
    </main>
  );
}

export default App
