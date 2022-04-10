import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import swal from 'sweetalert';
import auth from '../../config/firebase';
import { AUTH } from '../constant';

export const loginWithEmail = (data) => (dispatch) => {
  const { email, password } = data;
  dispatch({
    type: AUTH.LOAD,
  });

  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        dispatch({
          type: AUTH.LOAD_SUCCESS,
          payload: user,
        });

        swal('Yay!', 'Login Success!', 'success');

        resolve(user);
      })
      .catch((error) => {
        const { code, message } = error;
        console.log(code, message);

        dispatch({
          type: AUTH.LOAD_ERROR,
          payload: message,
        });

        swal('Oops!', 'Login Failed!', 'error');

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
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        dispatch({
          type: AUTH.LOAD_SUCCESS,
          payload: user,
        });

        swal('Yay!', 'Login Success!', 'success');

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

        swal('Oops!', 'Login Failed!', 'error');

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
        // const credential = FacebookAuthProvider.credentialFromResult(result);
        // const accessToken = credential.accessToken;

        // ...
        dispatch({
          type: AUTH.LOAD_SUCCESS,
          payload: user,
        });

        swal('Yay!', 'Login Success!', 'success');

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

        swal('Oops!', 'Login Failed!', 'error');

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

      swal('Good Bye!', 'Sign Out Success!', 'success');
    })
    .catch((error) => {
      // An error happened.
      swal('Something was wrong!', error.message, 'error');
    });
};

export const createUserWithEmail = (data) => (dispatch) => {
  const { email, password, fullName } = data;

  dispatch({
    type: AUTH.LOAD,
  });

  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: fullName,
          photoURL:
            'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png',
        });
      })
      .then(() => {
        dispatch({
          type: AUTH.LOAD_SUCCESS,
          payload: auth.currentUser,
        });

        swal({
          title: 'Yay!',
          text: 'Akunmu Berhasil Dibuat!',
          icon: 'success',
        });

        resolve(auth.currentUser);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        dispatch({
          type: AUTH.LOAD_ERROR,
          payload: errorCode,
        });

        swal({
          title: 'Oops!',
          text: errorCode || 'Something when wrong!',
          icon: 'error',
        });
        console.log(errorCode, errorMessage);
        reject(errorMessage);
      });
  });
};
