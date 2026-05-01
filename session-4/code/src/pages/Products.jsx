import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      let response = await axios.get("https://dummyjson.com/products");
      console.log(response.data.products);
      setProducts(response.data.products);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <div>No Data Yet!</div>;
  }

  const productList =
    products.length &&
    products.map((product) => {
      return (
        <div key={product.id}>
          <p>
            <Link to={`/products/${product.id}`}>{product.brand}</Link>
          </p>
        </div>
      );
    });

  return <>{productList}</>;
};

export default Products;
