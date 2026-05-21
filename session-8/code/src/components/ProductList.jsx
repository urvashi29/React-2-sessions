import React, { useContext } from "react";
import products from "../data/products";
import { StoreContext } from "../context/StoreProvider";

const ProductList = () => {
  const { addToCart } = useContext(StoreContext);

  return (
    <div>
      {products.map((product) => {
        return (
          <div
            key={product.id}
            style={{
              border: "1px solid black",
              margin: "10px",
              padding: "10px",
            }}
          >
            <h3>{product.name}</h3>
            <p>Price: {product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
