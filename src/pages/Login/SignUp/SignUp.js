import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Button from '@restart/ui/esm/Button';
import initializeAuthentication from '../Firebase/firebase.init';
import { Link } from 'react-router-dom';
import GoogleLogin from '../GoogleLogin/GoogleLogin';

 initializeAuthentication();


const SignUp = () => {
    const [user, setuser] = useState({
        email: "",
        password: "",
        name: ""
      });

      const [success, setSuccess] = useState('');
      const [errorMsg, setErrorMsg] = useState('');
      const getInputValue = (e) => {
        const getValue = { ...user };
        getValue[e.target.name] = e.target.value;
        setuser(getValue);
      };
      const hangleSignup = (e) => {
        if(user.email !== '' && user.password !== '' && user.name !== ''){
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, user.email, user.password, user.name)
              .then((userCredential) => {
                const user = userCredential.user;
                setSuccess('Signup success')
                setErrorMsg('');
              })
              .catch((error) => {
                const errorMessage = error.message;
                setErrorMsg(errorMessage);
                setSuccess('');
              });
            }
            e.preventDefault();
        }
    return (
        <div>
            <div>
      <h2 className="mt-5">Sign Up Page</h2>
      <p>{success}</p>
      <p>{errorMsg}</p>
      <Form onSubmit={hangleSignup}>
      <Form.Group
          className="mb-3 mt-5  d-flex justify-content-center"
          controlId="formBasicEmail"
        >
          <Form.Control
            onBlur={getInputValue}
            className="w-50 "
            type="text"
            placeholder="Enter your name"
            name="name"
          />
        </Form.Group>
        <Form.Group
          className="mb-3 d-flex justify-content-center"
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
        <Button className="btn btn-primary" variant="primary" type="submit">
          Sign up
        </Button>
      </Form>
      <div>
        <Link to="/login">Go to Sign in</Link>
      </div>
      <GoogleLogin></GoogleLogin>
    </div>
        </div>
    );
};

export default SignUp;