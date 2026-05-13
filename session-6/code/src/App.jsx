import React, { useCallback, useEffect, useMemo, useState } from "react";
import ProductList from "./components/ProductList";
import { fetchProducts } from "./services/productServices";
import Cart from "./components/Cart";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  // useCallback -> function reference
  const onAddCart = useCallback((product) => {
    setCart((prev) => [...prev, product]);
  }, []);

  // useMmemo -> preserving expensive value
  const filterProducts = useMemo(() => {
    console.log("filtering products");
    return products.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search, products]);

  if (loading) return <p>Loading products....</p>;

  return (
    <div style={{ display: "flex", padding: "20px" }}>
      <div style={{ flex: 3 }}>
        <SearchBar value={search} onChange={setSearch} />
        <ProductList products={filterProducts} onAddCart={onAddCart} />
      </div>

      <Cart cart={cart} />
    </div>
  );
};

export default App;

// ProductList(product, onAddCart)
