import { AUTH } from "../constant";

const initialState = {
  currentUser: "",
  loading: false,
  error: "",
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case AUTH.LOAD:
      return {
        ...state,
        loading: true,
      };
    case AUTH.LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        currentUser: payload,
      };
    case AUTH.LOAD_ERROR:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case AUTH.SIGN_OUT:
      return initialState;
    default:
      return state;
  }
};
export default authReducer;
