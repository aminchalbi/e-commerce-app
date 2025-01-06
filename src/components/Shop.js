import React from "react";
import { useCart } from "./context/CartContext"; // Importer le contexte du panier
import productsData from "../components/ProductsData"; // Votre fichier de données
import "../Style/Shop.css";

function Shop() {
  const { addToCart } = useCart();

  return (
    <div className="shop">
      <h1 className="shop-title">Our Products</h1>
      <div className="product-cards">
        {productsData.map((product) => (
          <div className="product-card" key={product.key}>
            <img src={product.img} alt={product.name} className="product-image" />
            <div className="product-details">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-seller">Sold by: {product.seller}</p>
              <p className="product-price">Price: ${product.price}</p>
              <p className="product-stock">Stock: {product.stock} left</p>
              <button
                className="shop-now-button"
                onClick={() => addToCart(product)} // Ajouter au panier au clic
              >
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;
