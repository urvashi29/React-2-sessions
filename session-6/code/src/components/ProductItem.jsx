import React from "react";

const ProductItem = ({ product, onAddCart }) => {

  return (
    <div style={{ marginBottom: "10px" }}>
      <span>
        {product.title} - $ {product.price}
      </span>
      <button style={{ marginLeft: "10px" }} onClick={() => onAddCart(product)}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductItem;
