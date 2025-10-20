import React, { Suspense, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import AppsCard from './AppsCard';
import searchError from '../../assets/App-Error.png'

const Apps = () => {
    const [search, setSearch] = useState('');
    const [loading, setLoading] = useState(true);
    const [control, setControl] = useState(true);

    const data = useLoaderData();
    console.log("Loader data:", data);


    //search state er value input text value er sathe match korar logic:
    const filterData = data.filter(data => data.title.toLocaleLowerCase().includes(search));




    // Loading / Spiner Logic:
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 300);
        return () => clearTimeout(timer);

    }, []);

    //handle to the api data loading spiner:
    useEffect(() => {
        if (data && data.length > 0) {
            setControl(false);
        }
    }, [data])

    if (loading) return <div className='text-center mt-5'><span className="loading loading-spinner text-success "></span></div>;

    //handle input search:
    const handleSearch = (e) => {
        const value = e.target.value.toLocaleLowerCase();
        setSearch(value);
        setControl(true);

        setTimeout(() => {
            setControl(false);
        }, 400)


    }

    return (
        <div>
            <div className='text-center my-15'>
                <h3 className='text-3xl font-bold '>Our All Applications</h3>
                <p className='text-[#627382] mt-2'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className='flex flex-col lg:flex-row justify-between items-center mb-5 mx-3'>
                <h3 className='text-xl font-bold border-b-1'>({data.length}) Total Apps</h3>
                <input onChange={handleSearch} className='border-1 rounded-xl p-2' type="search" name="search" placeholder='Search App' />

            </div>

        {/* show part: */}
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 mx-3'>
                {control ?
                    <div className='text-center col-span-4'>
                        <span className="loading loading-infinity loading-xl"></span>
                    </div> :
                    filterData.length > 0 ?
                        (filterData.map(data => (
                            <AppsCard key={data.id} data={data}></AppsCard>
                        ))) :
                        (<p className='text-3xl text-red-500 font-bold col-span-4 text-center'>
                            <img className='mx-auto max-w-[300px] mb-3' src={searchError} alt="" />
                            <span>No apps found  <br /> matching your search.</span> <br />
                            <Link to={'/'}><button className='btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white mt-5'>Go Back!</button></Link>
                        </p>)
                }
            </div>
        </div>
    );
};

export default Apps;





