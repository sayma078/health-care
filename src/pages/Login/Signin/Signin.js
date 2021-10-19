import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import initializeAuthentication from "../Firebase/firebase.init";
import GoogleLogin from "../GoogleLogin/GoogleLogin";
import { AuthContext } from "../../../Context/AuthProvider";

initializeAuthentication();

const Signin = () => {
  const [user, setuser] = useState({
    email: "",
    password: "",
  });
  const [success, setSuccess] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loginUser, setLoginUser] = useContext(AuthContext);
  const getInputValue = (e) => {
    const getValue = { ...user };
    getValue[e.target.name] = e.target.value;
    setuser(getValue);
  };
  const hangleSignin = (e) => {
    if (user.email !== "" && user.password !== "") {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
          const user = userCredential.user;
          setLoginUser(user);
          setSuccess("Signin success");
          setErrorMsg("");
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrorMsg(errorMessage);
          setSuccess("");
        });
    }
    e.preventDefault();
  };
  return (
    <div>
      <h2 className="mt-5">Sign In Page</h2>
      <p>{success}</p>
      <p>{errorMsg}</p>
      <Form onSubmit={hangleSignin}>
        <Form.Group
          className="mb-3 mt-5  d-flex justify-content-center"
          controlId="formBasicEmail"
        >
          <Form.Control
            onBlur={getInputValue}
            className="w-50 "
            type="email"
            placeholder="Enter your email"
            name="email"
            required
          />
        </Form.Group>
        <Form.Group
          className="mb-3 d-flex justify-content-center "
          controlId="formBasicPassword"
        >
          <Form.Control
            onBlur={getInputValue}
            className="w-50 "
            type="password"
            placeholder="Enter your password"
            name="password"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign in
        </Button>
      </Form>
      <div>
        <Link to="/signUp">Sign up</Link>
      </div>
      <GoogleLogin></GoogleLogin>
    </div>
  );
};

export default Signin;
