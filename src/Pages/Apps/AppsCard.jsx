import React from 'react';
import { FaArrowDown } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { Link } from 'react-router';

const AppsCard = ({ data }) => {
    const { id, image, title, downloads, ratingAvg } = data;
    
    return (
        <Link to={`/details/${id}`}><div className=' p-3 rounded-lg shadow-xl shadow-blue-400'>
            <div>
                < img className='w-[200px] h-[200px] mx-auto' src={image} alt="" />
                <h3 className='text-2xl font-semibold my-2 '>{title}</h3>
                <div className='flex justify-between items-center'>
                    <p className='btn text-green-500  bg-gray-200 '><FaArrowDown /> {downloads}</p>
                    <p className='btn text-yellow-500 bg-gray-200'><FaStar /> {ratingAvg}</p>
                </div>
            </div>
        </div></Link>
    );
};

export default AppsCard;