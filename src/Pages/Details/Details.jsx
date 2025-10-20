import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import DetailsInfo from './DetailsInfo';
import { addToStoreDb } from '../../Utility/addToDb';
import Header from '../../component/Header/Header';

const Details = () => {
    // dynamic id find
    const {id} = useParams();
    const numberConvertId = parseInt(id);
    //local fetch data
    const data = useLoaderData();

    //compare and find the matching id
    const matchingId = data.find(data => data.id === numberConvertId);
    
    const handleInstalled = (id) => {
        addToStoreDb(id);
    }



    // Loading / Spiner Logic:
      const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 300); 
        return () => clearTimeout(timer);
      }, []);
    
      if (loading) return <div className='text-center mt-5'><span className="loading loading-dots loading-xl"></span></div>;

    
    return (
        <div>
            {
                <DetailsInfo matchingId = {matchingId} handleInstalled={handleInstalled}></DetailsInfo>
            }
            
        </div>
    );
};

export default Details;