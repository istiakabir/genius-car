import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import  auth  from '../../../genius-car/src/firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';

const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

      const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const location = useLocation();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
       
    }

    const navigateRegister = () => {
        navigate('/register')
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email);
          alert('Sent email');
        
    }

    if(user){
        navigate(from, { replace: true });
    }

    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-center my-5 text-uppercase text-primary'>Please Login</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required ref={emailRef} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
               
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <p className='my-3'>New To Genius Car? <Link to='/register'className='text-danger pe-auto text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>

            <p className='my-3'>Are You Forget Password? <Link to='/register'className='text-danger pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</Link></p>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;