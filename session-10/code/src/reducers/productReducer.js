import { ADD_PRODUCTS, TOGGLE_WISHLIST } from "../actions/actionType";

const initialState = {
  productList: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCTS:
      return { ...state, productList: action.payload };
    case TOGGLE_WISHLIST:
      return {
        ...state,
        productList: state.productList.map((product) =>
          product.id == action.payload
            ? { ...product, liked: !product.liked }
            : product,
        ),
      };
    default:
      return state;
  }
};
