import React, { useState } from "react";
import "./Products.css";
import aloeVera from "../assets/plant1.png";
import snakePlant from "../assets/plant2.png";
import monstera from "../assets/plant3.png";
import spiderPlant from "../assets/plant4.png";
import peaceLily from "../assets/plant5.png";
import cactus from "../assets/plant6.png";
import Header from "../components/Header";

const plants = [
  { id: 1, name: "Aloe Vera", price: 12.99, img: aloeVera, category: "Succulents" },
  { id: 2, name: "Snake Plant", price: 15.99, img: snakePlant, category: "Indoor" },
  { id: 3, name: "Monstera", price: 18.99, img: monstera, category: "Tropical" },
  { id: 4, name: "Spider Plant", price: 10.99, img: spiderPlant, category: "Air Purifying" },
  { id: 5, name: "Peace Lily", price: 14.99, img: peaceLily, category: "Flowering" },
  { id: 6, name: "Cactus", price: 8.99, img: cactus, category: "Desert" },
];

const Products = ({ cart, setCart }) => {
  const [added, setAdded] = useState({});

  const handleAddToCart = (plant) => {
    const existingItem = cart.find((item) => item.id === plant.id);
    if (existingItem) {
      setCart(cart.map((item) =>
        item.id === plant.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...plant, quantity: 1 }]);
    }
    setAdded((prev) => ({ ...prev, [plant.id]: true }));
  };

  return (
    <div className="products">
      {/* <Header cart={cart} /> */}
      <h2>Our Houseplants</h2>
      <div className="plant-list">
        {plants.map((plant) => (
          <div key={plant.id} className="plant-card">
            <img src={plant.img} alt={plant.name} />
            <h3>{plant.name}</h3>
            <p>Price: ${plant.price}</p>
            <button 
              className="add-to-cart" 
              onClick={() => handleAddToCart(plant)} 
              disabled={added[plant.id]}
            >
              {added[plant.id] ? "Added" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
