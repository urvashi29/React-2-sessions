import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products, onAddCart }) => {
  const productList =
    products.length &&
    products.map((product) => {
      return (
        <ProductItem key={product.id} product={product} onAddCart={onAddCart} />
      );
    });

  return <>{productList}</>;
};

export default ProductList;
