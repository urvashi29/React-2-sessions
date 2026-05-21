import React from "react";

// Context
export const StoreContext = React.createContext();

// Provider Component
const StoreProvider = ({ children }) => {
  const [theme, setTheme] = React.useState("light");
  const [cart, setCart] = React.useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev == "light" ? "dark" : "light"));
  };

  console.log(children);

  return (
    <StoreContext.Provider value={{ theme, cart, addToCart, toggleTheme }}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
