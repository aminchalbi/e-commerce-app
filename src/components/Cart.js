import React from "react";
import { useCart } from "./context/CartContext"; // Importer le contexte du panier
import "../Style/Cart.css";

function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  const handleCheckout = () => {
    alert("Thank you for your purchase!");
    clearCart(); // Vider le panier après paiement
  };

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      <div className="cart-items">
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((product, index) => (
            <div key={index} className="cart-item">
              <img src={product.img} alt={product.name} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
                <p>Quantity: 1</p>
                <button
                  className="remove-button"
                  onClick={() => removeFromCart(product.key)} // Supprimer le produit
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="cart-total">
        <h3>Total: ${cart.reduce((total, product) => total + product.price, 0)}</h3>
      </div>
      {cart.length > 0 && (
        <button className="checkout-button" onClick={handleCheckout}>
          Payer
        </button>
      )}
    </div>
  );
}

export default Cart;
