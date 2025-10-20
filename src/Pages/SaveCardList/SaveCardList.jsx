import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getStoreCard, removeIntoDb } from '../../Utility/addToDb';
import { FaArrowDown } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";





const SaveCardList = () => {
    const [cardList, setCardList] = useState([]);
    const [sort, setSort] = useState("");

    const data = useLoaderData();
    

    useEffect(() => {    //localStorage to data collect system
        const storedCardData = getStoreCard();

        //localstorage datas convert to the number using map:
        const convertedStoredCardData = storedCardData.map(cardId => parseInt(cardId));

        //matching and check with filter:
        const check = data.filter(card => convertedStoredCardData.includes(card.id));
        setCardList(check);

    }, []);

    const handleUnistall = (id) => {
        //loalstorage id remove:
        removeIntoDb(id);

        //remove card:
        const remove = cardList.filter(card => card.id !== id);
        setCardList(remove);
    }

    const handleSort = (type) => {
        setSort(type)

        if(sort === 'Low-High'){
            const sortByLowToHigh = [...cardList].sort((a,b) => a.ratingAvg - b.ratingAvg);
            setCardList(sortByLowToHigh);
        }

        if(sort === 'High-Low'){
            const sortByHightToLow = [...cardList].sort((a,b)=> b.ratingAvg - a.ratingAvg);
            setCardList(sortByHightToLow);
        }

    }


    // Loading / Spiner Logic:
      const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 300); 
        return () => clearTimeout(timer);
      }, []);
    
      if (loading) return <div className='text-center mt-5'><span className="loading loading-spinner text-success "></span></div>;


    return (
        <div>

            <div className='text-center my-20'>
                <h1 className='text-4xl font-bold'>Your Installed Apps</h1>
                <h4 className='text-[20px] text-gray-400 mt-2'>Explore All Trending Apps on the Market developed by us</h4>
            </div>

            <div className='flex flex-col lg:flex-row justify-between items-center mb-18  mx-15'>
                <h3 className='text-xl font-bold border-b-1 '>({cardList.length}) Apps Found</h3>

                <details className="dropdown">
                    <summary className="btn m-1">Sort By Size [ {sort? sort :""} ] </summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={()=> handleSort('Low-High')}>Low-High</a></li>
                        <li><a onClick={()=> handleSort('High-Low')}>High-Low</a></li>
                    </ul>
                </details>
            </div>

            <section >
                {
                    cardList.map(card => (
                        <div className=' flex flex-col lg:flex-row justify-between items-center mx-15 p-1 px-3 mb-3 bg-gray-200 rounded-xl'>
                            <div className='flex gap-8 items-center '>
                                <img className='w-[80px] bg-red-300 rounded-lg' src={card.image} alt="" />
                                <div className='text-center'>
                                    <p className='text-[20px] font-semibold mb-5'>{card.title}</p>
                                    <div className='flex gap-4'>
                                        <p className='text-green-500 '><FaArrowDown className='mx-auto bg-red-200' /> {card.downloads}</p>
                                        <p className='text-yellow-500'><IoMdStar className='mx-auto bg-green-200' /> {card.ratingAvg}</p>
                                    </div>
                                </div>
                            </div>
                            <button onClick={() => handleUnistall(card.id)} className='btn text-white bg-green-400'>Uninstall</button>
                        </div>
                    ))
                }
            </section>
        </div>
    );
};

export default SaveCardList;