import { WISATA } from "../constant";

const initialState = {
  wisata: "",
  currentWisata: "",
  loading: false,
  error: "",
};

const wisataReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case WISATA.LOAD:
      return {
        ...state,
        loading: true,
      };
    case WISATA.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        wisata: payload,
      };
    case WISATA.LOAD_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case WISATA.SET_CURRENT:
      return {
        ...state,
        loading: true,
      };
    case WISATA.SET_CURRENT_SUCCESS:
      return {
        ...state,
        loading: false,
        currentWisata: payload,
      };
    case WISATA.SET_CURRENT_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default wisataReducer;
