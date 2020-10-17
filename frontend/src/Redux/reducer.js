import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  // LOGIN_REQUEST,
  LOG_SUCCESS,
  // LOGIN_FAILURE,
} from "./actionTypes";

const initState = {
  data: "",
  errMsg: "",
  reg: false,
  isLogin: false,
  user: "",
};

export default (state = initState, action) => {
  console.log(action);
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
    case LOG_SUCCESS:
      return {
        ...state,
        isLogin: true,
        user: action.user,
      };
    default:
      return state;
  }
};
