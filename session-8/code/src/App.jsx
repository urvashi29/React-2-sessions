import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";

import { StoreContext } from "./context/StoreProvider";

const App = () => {
  const { theme } = useContext(StoreContext);

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <Navbar />
      <ProductList />
    </div>
  );
};

export default App;
