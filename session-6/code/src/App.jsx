import React, {
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import ProductList from "./components/ProductList";
import { fetchProducts } from "./services/productServices";
import SearchBar from "./components/SearchBar";
import useDebounce from "./hooks/useDebounce";
import EventsCard from "./components/EventsCard";

const allEvents = Array.from({ length: 5000 }, (_, i) => ({
  id: i,
  title: `Tech Summit ${i}`,
}));

// import Cart from "./components/Cart";
const Cart = React.lazy(() => import("./components/Cart"));

const App = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState(allEvents);

  const debouncedSearch = useDebounce(search);

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
      p.title.toLowerCase().includes(debouncedSearch.toLowerCase()),
    );
  }, [search, products]);

  if (loading) return <p>Loading products....</p>;

  return (
    <div style={{ display: "flex", padding: "20px" }}>
      <div style={{ flex: 3 }}>
        <SearchBar value={search} onChange={setSearch} />
        <ProductList products={filterProducts} onAddCart={onAddCart} />
      </div>

      <EventsCard events={events} />

      <Suspense fallback={<div>Loading Cart Data...</div>}>
        <Cart cart={cart} />
      </Suspense>
    </div>
  );
};

export default App;

// ProductList(product, onAddCart)
