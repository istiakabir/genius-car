import React from 'react';

const Footer = () => {

    const today = new Date();
    const year = today.getFullYear();

    return (
        <div className='text-center my-5 text-primary'>
            <p>Copyright @ {year}</p>
        </div>
    );
};

export default Footer;