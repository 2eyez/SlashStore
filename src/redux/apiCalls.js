import axios from "axios";

import {
  loginStart,
  loginSuccess,
  loginFailure,
} from "./userRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());

  try {
    const res = await axios.post(
      "http://localhost:8000/api/v1/auth/login",
      user
    );

    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};