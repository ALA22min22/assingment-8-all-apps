import React, { useEffect, useState } from 'react';
import { FaGooglePlay } from "react-icons/fa6";
import { FaAppStoreIos } from "react-icons/fa6";
import hero from '../../assets/hero.png'
import { useLoaderData } from 'react-router';
import HomeCard from './HomeCard';
const Home = () => {
    const data = useLoaderData();
   
    
    // Loading / Spiner Logic:
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300); 
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <div className='text-center mt-5'><span className="loading loading-spinner text-success "></span></div>;

    return (
        <>
            <div>
                <div className='text-center mt-7'>
                    <h1 className='text-5xl font-bold'>We Build <br />
                        <span className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h1>
                    <p className='text-[#627382] mt-4'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                    <div>
                        <button className='btn m-4'><a className='flex gap-1 items-center' href="https://play.google.com/store/games?device=windows"><FaGooglePlay /> App Store</a></button> 
                        <button className='btn m-4'><a className='flex gap-1 items-center' href="https://www.apple.com/app-store/"><FaAppStoreIos /> Google Play</a></button>
                    </div>
                </div>
                <div>
                    <img className='w-[640px] mx-auto mt-3' src={hero} alt="" />
                </div>
                <section className='p-11 bg-linear-to-r from-[#632EE3] to-[#9F62F2]'>
                    <h3 className='text-center text-4xl font-bold text-white mb-5'>Trusted by Millions, Built for You</h3>
                    <div className=' flex flex-col  lg:flex-row gap-24 justify-center items-center'>
                        <div className='text-center'>
                            <p className='text-[#FFFFFF95]'>Total Downloads</p>
                            <h3 className='text-5xl text-white my-3 font-bold'>29.6M</h3>
                            <p className='text-[#FFFFFF95]'>21% more than last month</p>
                        </div>
                        <div className='text-center'>
                            <p className='text-[#FFFFFF95]'>Total Reviews</p>
                            <h3 className='text-5xl text-white my-3 font-bold'>906K</h3>
                            <p className='text-[#FFFFFF95]'>46% more than last month</p>
                        </div>
                        <div className='text-center'>
                            <p className='text-[#FFFFFF95]'>Active Apps</p>
                            <h3 className='text-5xl text-white my-3 font-bold'>132+</h3>
                            <p className='text-[#FFFFFF95]'>31 more will Launch</p>
                        </div>
                    </div>
                </section>
            </div>

            {/* Api/card section */}
            <section>
                <div className='text-center my-12'>
                    <h3 className='text-3xl font-bold '>Trending Apps</h3>
                    <p className='text-[#627382] mt-2'>Explore All Trending Apps on the Market developed by us</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-3'>
                    {
                        data.map(data => <HomeCard key={data.id} data={data}></HomeCard>)
                    }
                </div>
            </section>
        </>
    );
};

export default Home;