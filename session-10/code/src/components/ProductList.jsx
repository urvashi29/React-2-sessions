import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/actions";
import { toggleWishlist } from "../actions/actions";

const ProductList = () => {
  const productList = useSelector((state) => state.productList);
  console.log(productList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <>
      {productList.map((product) => (
        <div key={product.id}>
          <img src={product.thumbnail} />
          <span>
            {product.title} - {product.price}
          </span>

          <button onClick={() => dispatch(toggleWishlist(product.id))}>
            {product.liked ? "❤️" : "🤍"}
          </button>
        </div>
      ))}
    </>
  );
};

export default ProductList;
