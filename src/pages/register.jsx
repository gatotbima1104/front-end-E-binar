import React from 'react'
import {Form, Button} from 'react-bootstrap';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

const Register = () => {
  return (
    <div>
      <section id="register" className='d-flex justify-items-center align-items-center'>
      <div className="container register">
                <div className="container">
                <div className="row">
                    <h2 className='text-center my-5 createAccount'>Create your account</h2>
                </div>
                <div className="row mb-5">
                    <Form className='form'>
                    <Form.Group className="mb-3 was-validated" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="email" required/>
                        <div className="invalid-feedback">
                            Please enter your email
                        </div>
                    </Form.Group>
                    <Form.Group className="mb-3 was-validated" controlId="formBasicId">
                        <Form.Control type="text" placeholder="id" required/>
                        <div className="invalid-feedback">
                            Please enter your id
                        </div>
                    </Form.Group>         
                    <Form.Group className="mb-3 was-validated" controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" required/>
                        <div className="invalid-feedback">
                            Please enter your password
                        </div>
                    </Form.Group>         
                
                    <div className="text-center mt-5 button">
                    <Button type="submit" href='/login'>
                        Daftar
                    </Button>
                    </div>
                    </Form>
                </div>
                <div className="row d-flex mb-4 icon ">
                    <div className="text-center">
                    <a href="google"  className='me-2'>                        
                        <FaGoogle />                                                
                    </a>
                    <a href="facebook">
                        <FaFacebook />
                    </a>
                    </div>
                    
                                     
                    
                 </div>

                </div>
                
            </div>
      </section>
    </div>
  )
}

export default Register
