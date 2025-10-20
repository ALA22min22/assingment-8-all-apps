import React from 'react';
import error from '../../assets/error-404.png'
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center mt-8'>
            <section className='text-center' >
                <img src={error} alt="" />
                <h3 className='text-4xl font-bold mt-3'>Oops, page not found!</h3>
                <p className='text-gray-500 my-3'>The page you are looking for is not available.</p>
                <Link to={'/'}><button className='btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white'>Go Back!</button></Link>
            </section>
        </div>
    );
};

export default ErrorPage;