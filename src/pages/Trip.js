import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import Layout from '../components/Trip/Layout';
import { BsBookmark } from 'react-icons/bs';
import { LuSearch } from 'react-icons/lu';
import { TripContext } from '../context/TripState';
import GetRatingUi from '../utils/Components/GetRatingUi';
import { Places } from '../utils/Places';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function TripCard({ data, selctedSights, setSelectedSights }) {

    const [style, setStyle] = useState(false);
    useEffect(() => {
        if (selctedSights.includes(data.id)) {
            setStyle(true);
        } else {
            setStyle(false);
        }
    }, [selctedSights]);

    return (
        <div onClick={() => {
            if(selctedSights.includes(data.id)){
                setSelectedSights(selctedSights.filter((id) => {
                    return id !== data.id;
                }));
            } else {
                setSelectedSights([...selctedSights, data.id]);
            }
        }} style={style ? {
            border: "2px solid #10B5CB"
        } : {
            border: "2px solid transparent"
        }} className='h-[max-content] flex flex-col rounded-lg duration-200 overflow-hidden bg-white'>
            <img src={require("../assets/background.png")} className='w-full h-[150px] object-cover' />
            <div className='p-2 h-[max-content] flex flex-col gap-3'>
                <p className='text-2xl font-semibold'>{data.name}</p>
                <div className='flex flex-col gap-1'>
                    <div className='flex items-center gap-2'>
                        <p className='text-lg text-[#666666]'>{data.rating}</p>
                        {/* Rating */}
                        {<GetRatingUi rating={data.rating} />}
                    </div>
                    <p className='text-[#666666]'>{data.description.substring(0, 60) + "..."}</p>
                </div>
                <div className='flex justify-between gap-3 items-center'>
                    <p className='text-[#666666]'>{data.timeToTravel}</p>
                    <p className='text-[#666666]'>{(data.cost !== 0) ? (<><sup>₹</sup><span className='text-lg text-black'>{`${data.cost} `}</span><span>per adult</span></>) : ("Free")}</p>
                </div>
            </div>
        </div>
    );
}

export default function Trip({ indexId }) {

    let trip = useContext(TripContext);
    let navigate = useNavigate();
    const [tripData, setTripData] = useState(null);
    const [selctedSights, setSelectedSights] = useState([]);

    useLayoutEffect(() => {
        if (trip.data && trip.data.length >= indexId) {
            if (Places.filter((data) => {
                return String(trip.data[indexId - 1]['search']).toLowerCase().includes(String(data.city).toLowerCase());
            }).length !== 0) {
                setTripData(Places.filter((data) => {
                    return String(trip.data[indexId - 1]['search']).toLowerCase().includes(String(data.city).toLowerCase());
                })[0]);
                setSelectedSights(trip.data[indexId - 1]['selctedSights'] || []);
            }
        }
    }, [trip.data]);

    const handleNavigate = () => {
        if(selctedSights.length >= 3){
            trip.setData((prev) => [
                ...trip.data.filter((item) => item.id !== indexId),
                {
                    ...trip.data.filter((item) => item.id === indexId)[0],
                    selctedSights
                }
            ]);
            trip.updateData();
            navigate(`/${indexId}/trip/meals`);
        } else {
            toast.error("Please select atleast 3 sights");
        }
    }

    return (
        <Layout handlePrev={null} handleNext={handleNavigate} >
            <div className='flex flex-col gap-3'>
                <h1 className='text-4xl'>Top sights in {tripData && tripData.city}</h1>
                <p className='text-[#999999]'>Select the sights you would like to include for your visit in Goa</p>
            </div>
            <div className='flex flex-col gap-5'>
                <div className='flex gap-3'>
                    <div className='flex-1 flex px-4 text-lg items-center rounded-full bg-white border border-[#CCCCCC] overflow-hidden'>
                        <LuSearch size={20} className='text-[#CCCCCC]' />
                        <input placeholder='Search Here' className='w-full px-4 py-1 outline-none' />
                    </div>
                    <div className='flex w-[max-content] text-lg gap-2 items-center px-4 py-1 rounded-full bg-white border border-[#CCCCCC] text-[#CCCCCC]'>
                        <BsBookmark />
                        <p>Selected sights</p>
                    </div>
                </div>
                <div className='grid grid-cols-2 2xl:grid-cols-3 gap-4 2xl:gap-3'>
                    {
                        tripData && tripData.places.map((data, index) => {
                            return <TripCard selctedSights={selctedSights} setSelectedSights={setSelectedSights} key={index} data={data} />
                        })
                    }
                </div>
            </div>
        </Layout>
    )
}
