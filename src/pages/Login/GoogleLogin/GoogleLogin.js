import React from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const GoogleLogin = () => {
  const GoogleProvider = new GoogleAuthProvider();

  const googleHandler = () => {
    const auth = getAuth();
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        const user = result.user;
        console.log('fgtrcry',user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };
  return <div>
      <button className="btn btn-info" onClick={googleHandler} >Sign In With Google</button>
  </div>;
};

export default GoogleLogin;
