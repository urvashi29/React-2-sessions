import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const productId = useParams();
  console.log(productId.pid);

  const fetchProduct = async () => {
    try {
      let response = await axios.get(
        `https://dummyjson.com/products/${productId.pid}`,
      );
      console.log(response.data);
      setProduct(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return <div>{product && product?.brand}</div>;
};

export default ProductDetails;
