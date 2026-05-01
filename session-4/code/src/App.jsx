import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import ProductDetails from "./pages/ProductDetails";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:pid" element={<ProductDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* <Footer /> */}
    </>
  );
};

export default App;
