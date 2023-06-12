import {
  GET_COIN_SUCCESS,
  SET_IS_FETCHING,
  GET_COIN_ERROR,
} from "../actions/index";

const initialState = {
  bpi: {
    USD: { code: "USD", rate_float: 0 },
  },
  isFetching: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COIN_SUCCESS:
      return { ...state, bpi: action.payload };
    case SET_IS_FETCHING:
      return { ...state, isFetching: action.payload };
    case GET_COIN_ERROR:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
