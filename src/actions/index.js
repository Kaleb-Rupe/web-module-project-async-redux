import axios from "axios";

export const GET_COIN_SUCCESS = "GET_COIN_SUCCESS";
export const SET_IS_FETCHING = "SET_IS_FETCHING";
export const GET_COIN_ERROR = "GET_COIN_ERROR";

export const getCoinPrice = () => (dispatch) => {
  dispatch(setIsFetching(true));
  axios
    .get("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then((res) => {
      dispatch(getCoinSuccess(res.data.bpi));
      console.log(res.data.bpi);
    })
    .catch((err) => {
      // todo: dispatch getPersonError
      console.log(err.message);
    })
    .finally(() => {
      dispatch(setIsFetching(false));
    });
};

export const setIsFetching = (isFetching) => ({
  type: SET_IS_FETCHING,
  payload: isFetching,
});

export const getCoinSuccess = (bpi) => ({
  type: GET_COIN_SUCCESS,
  payload: bpi,
});
