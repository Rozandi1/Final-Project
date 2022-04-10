import axios from "axios";
import { WISATA } from "../constant";

export const getWisata = () => (dispatch) => {
  dispatch({
    type: WISATA.LOAD,
  });

  axios({
    method: "get",
    url: `${process.env.REACT_APP_BASE_URL}/wisata`,
  })
    .then((response) => {
      dispatch({
        type: WISATA.LOAD_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: WISATA.LOAD_ERROR,
        payload: error.message,
      });
    });
};
export const setCurrentWisata = (id) => (dispatch) => {
  dispatch({
    type: WISATA.SET_CURRENT,
  });

  axios({
    method: "get",
    url: `${process.env.REACT_APP_BASE_URL}/wisata/${id}`,
  })
    .then((response) => {
      dispatch({
        type: WISATA.SET_CURRENT_SUCCESS,
        payload: response.data,
      });
    })
    .catch((error) => {
      dispatch({
        type: WISATA.SET_CURRENT_ERROR,
        payload: error.message,
      });
    });
};
