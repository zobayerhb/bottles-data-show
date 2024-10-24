import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css"
import { addToLS } from "../../utilities/localStorage";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  const handleShoppingCart = (bottle) => {
    console.log("added shopping cart in the state");
    const newCart = [...cart, bottle]
    setCart(newCart);
    addToLS(bottle.id)
  }

  return (
    <div>
      <p>Bottles Container: {bottles.length}</p>
      <h3>Cart: {cart.length}</h3>

      <div className="bottles-container">
        {bottles.map((bottle) => (
          <Bottle key={bottle.id} handleShoppingCart={handleShoppingCart} bottle={bottle}></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
