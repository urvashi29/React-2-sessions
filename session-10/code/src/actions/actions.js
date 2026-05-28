import axios from "axios";
import { ADD_PRODUCTS, TOGGLE_WISHLIST } from "./actionType";
import { fetchProducts } from "../services/fetchProducts";

// action creators
export const getProducts = () => {
  return async (dispatch) => {
    try {
      const data = await fetchProducts();
      const updated = data.map((p) => ({
        ...p,
        liked: false,
      }));

      dispatch({ type: ADD_PRODUCTS, payload: updated });
    } catch (err) {
      console.log("api error", err);
    }
  };
};

export const toggleWishlist = (id) => {
  return async (dispatch) => {
    dispatch({ type: TOGGLE_WISHLIST, payload: id });
  };
};
