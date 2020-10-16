import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from "./actionTypes";

const initState = {
  data: "",
  errMsg: "",
  reg: false,
};

export default (state = initState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return {
        ...state,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        reg: true,
        data: [...state.data, action.payload],
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        reg: false,
        errMsg: action.payload,
      };
    default:
      return state;
  }
};
