import React, { useContext } from "react";
import { StoreContext } from "../context/StoreProvider";

const Navbar = () => {
  const { cart, toggleTheme } = useContext(StoreContext);

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <h3>Cart: {cart.length}</h3>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Navbar;
