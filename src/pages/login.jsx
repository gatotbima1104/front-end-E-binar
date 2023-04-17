import React from "react";
// import Button from 'react-bootstrap/Button';
import { Form, Button } from "react-bootstrap";
import { FaFacebook, FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div>
      <section
        id="login"
        className="d-flex justify-items-center align-items-center"
      >
        <div className="container login">
          <div className="container">
            <div className="row">
              <h2 className="text-center my-5">Logo</h2>
            </div>
            <div className="row mb-5">
              <Form className="form">
                <Form.Group className="mb-3 was-validated" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="id/email" required />
                  <div className="invalid-feedback">
                    Please enter your email
                  </div>
                </Form.Group>
                <Form.Group className="mb-3 was-validated" controlId="formBasicPassword">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    required
                  />
                  <div className="invalid-feedback">
                    Please enter your password
                  </div>
                </Form.Group>
                <div className="forget text-center">
                  <a href="#forgetPassword">Lupa password?</a>
                </div>
                <div className="text-center mt-5 button">
                  <Button type="submit" href="/">masuk</Button>
                </div>
              </Form>
            </div>
            <div className="row d-flex mb-2 ms-3 icon">
              <div className="col-md-6">
                <a href="facebook" className="me-2">
                  <FaFacebook />
                </a>
                <a href="google">
                  <FaGoogle />
                </a>
              </div>
              <div className="col-md-6 text-end ">
                <a href="/register" className="daftar">
                  daftar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
