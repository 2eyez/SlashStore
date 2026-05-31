import axios from "axios";
import {
  getProductsStart,
  getProductsSuccess,
  getProductsFailure,
} from "./productRedux";

export const getProducts = async (dispatch) => {
  dispatch(getProductsStart());

  try {
    const res = await axios.get(
      "https://fakestoreapi.com/products"
    );

    dispatch(getProductsSuccess(res.data));
  } catch (error) {
    dispatch(getProductsFailure());
  }
};