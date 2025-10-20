import React, { useEffect, useState } from 'react';
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import DetailsRating from './DetailsRating';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { getStoreCard, saveInsallId } from '../../Utility/addToDb';
import Header from '../../component/Header/Header';

const DetailsInfo = ({ matchingId, handleInstalled }) => {
    const [toggle, setToggle] = useState(false)
    const { id, image, title, companyName, downloads, ratingAvg, reviews, ratings, description } = matchingId;

    //check already install:
    useEffect(() => {
        const install = getStoreCard();
        if (install.includes(id)) {
            setToggle(true);
        }
    }, [id])

    const handleToggle = () => {
        setToggle(true);

        if (!toggle) {
            toast(`${title} Is Installing`);
            setToggle(true);
            saveInsallId(id)
        }

    }



    return (
        <div>

            

            <section className='flex flex-col lg:flex-row gap-20 justify-center items-center mt-10'>
                <img className='w-[300px]' src={image} alt="" />
                <div>
                    <h3 className='text-3xl font-bold'>{title}</h3>
                    <p className='mt-3'>Developed by <span className='text-blue-600'>{companyName}</span></p>
                    <div className='border-1 border-solid my-5'></div>
                    <div className='flex flex-col lg:flex-row gap-7'>
                        <div className='text-center'>
                            <p className=' text-2xl text-green-500 place-items-center-safe my-2'><FaCloudDownloadAlt /></p>
                            <p>Downloads</p>
                            <span className='text-2xl font-bold '>{downloads}</span>
                        </div>
                        <div className='text-center'>
                            <p className='text-2xl text-yellow-500 place-items-center-safe my-2'><FaStar /></p>
                            Average Ratings <br />
                            <span className='text-2xl font-bold'>{ratingAvg}</span>
                        </div>
                        <div className='text-center'>
                            <p className='text-2xl text-blue-500 place-items-center-safe my-2'><AiFillLike /></p>
                            Total Reviews <br />
                            <span className='text-2xl font-bold'>{reviews}</span>
                        </div>
                    </div>
                    <button onClick={() => { handleToggle(); handleInstalled(id); }} disabled={toggle} className={`btn bg-[#00D390] text-white mt-5 ${toggle && 'disabled'}`}>
                        {
                            toggle ? 'Installed' : 'Install Now (291 MB)'

                        }
                    </button>

                </div>
                <ToastContainer />
            </section>

            <section className='my-10 ml-5 '>

                <BarChart width={1200} height={300} data={ratings}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" fill="#FF8811" />
                </BarChart>

            </section>

            <section className='ml-5'>
                <p className='text-3xl font-bold mb-2'>Description</p>
                <p>{description}</p>
            </section>

        </div>
    );
};

export default DetailsInfo;