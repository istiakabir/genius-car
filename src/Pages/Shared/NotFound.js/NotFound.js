import React from 'react';
import error from '../../../images/404.jpg'

const NotFound = () => {
    return (
        <div>
            <img className='w-50 ms-5' src={error} alt="" />
        </div>
    );
};

export default NotFound;