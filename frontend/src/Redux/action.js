import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from "./actionTypes";
import axios from "axios";
import { useHistory } from "react-router-dom";

export const registerRequest = () => {
  return {
    type: REGISTER_REQUEST,
  };
};

export const registerSuccess = (payload) => {
  return {
    type: REGISTER_SUCCESS,
    payload,
  };
};

export const registerFailure = (payload) => {
  return {
    type: REGISTER_FAILURE,
    payload,
  };
};

export const fetchregisterDetails = (payload) => async (dispatch) => {
  console.log(payload);
  dispatch(registerRequest());
  await axios
    .post("http://localhost:9000/api/register", {
      name: payload.name,
      email: payload.email,
      password: payload.password,
    })
    .then((res) => {
      dispatch(registerSuccess(res.data));
    })
    .catch((err) => {
      console.log(err.response.data);
      dispatch(registerFailure(err.response.data));
    });
};
