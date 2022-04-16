import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;

    if (error) {
        errorElement=
            <div>
                <p>Error: {error.message}</p>
            </div>
        
    }

    if (user) {
        navigate('/home')
      }


    return (
        <div >
            <div className='d-flex align-items-center justify-content-center'>
                <div style={{ height: '1px' }} className='bg-primary w-25'></div>
                <h2 className='mt-2 px-2'>OR</h2>
                <div style={{ height: '1px' }} className='bg-primary w-25'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-primary d-block mx-auto w-50 my-2'>Google Sign In</button>
                <button className='btn btn-primary d-block mx-auto w-50 my-2'>Facebook Sign In</button>
                <button className='btn btn-primary d-block mx-auto w-50 my-2'>Github Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;