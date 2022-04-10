import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import swal from "sweetalert";
import auth from "../../config/firebase";
import { AUTH } from "../constant";

export const loginWithEmail = (data) => (dispatch) => {
  const { email, password } = data;
  dispatch({
    type: AUTH.LOAD,
  });

  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);

        dispatch({
          type: AUTH.LOAD_SUCCESS,
          payload: user,
        });

        swal("Yay!", "Login Success!", "success");

        resolve(user);
      })
      .catch((error) => {
        const { code, message } = error;
        console.log(code, message);

        dispatch({
          type: AUTH.LOAD_ERROR,
          payload: message,
        });

        swal("Oops!", "Login Failed!", "error");

        reject({ code, message });
      });
  });
};

export const loginWithGoogle = () => (dispatch) => {
  dispatch({
    type: AUTH.LOAD,
  });

  return new Promise((resolve, reject) => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        console.log(token);
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // ...
        dispatch({
          type: AUTH.LOAD_SUCCESS,
          payload: user,
        });

        swal("Yay!", "Login Success!", "success");

        resolve(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log(errorCode, errorMessage, email, credential);

        dispatch({
          type: AUTH.LOAD_ERROR,
          payload: errorMessage,
        });

        swal("Oops!", "Login Failed!", "error");

        reject(errorMessage);
      });
  });
};

export const loginWithFacebook = () => (dispatch) => {
  dispatch({
    type: AUTH.LOAD,
  });

  return new Promise((resolve, reject) => {
    signInWithPopup(auth, new FacebookAuthProvider())
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        console.log(user, accessToken);

        // ...
        dispatch({
          type: AUTH.LOAD_SUCCESS,
          payload: user,
        });

        swal("Yay!", "Login Success!", "success");

        resolve(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = FacebookAuthProvider.credentialFromError(error);

        // ...
        console.log(errorCode, errorMessage, email, credential);

        dispatch({
          type: AUTH.LOAD_ERROR,
          payload: errorMessage,
        });

        swal("Oops!", "Login Failed!", "error");

        reject(errorCode);
      });
  });
};

export const clearCurrentUser = () => (dispatch) => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      dispatch({
        type: AUTH.SIGN_OUT,
      });

      swal("Good Bye!", "Sign Out Success!", "success");
    })
    .catch((error) => {
      // An error happened.
      swal("Something was wrong!", error.message, "error");
    });
};
