import React, { useContext, useEffect, useState } from 'react';
import { TripContext } from '../../context/TripState';
import { Places } from '../../utils/Places';
import { FaLocationDot } from 'react-icons/fa6';
import { BsCalendar4Week } from 'react-icons/bs';
import getMonth from '../../utils/getMonth';
import { useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { AiOutlineArrowUp } from 'react-icons/ai';

function Card({ data }) {

    let navigate = useNavigate();
    const [locationDetails, setLocationDetails] = useState({});
    const [style, setStyle] = useState(false);

    useEffect(() => {
        if(data){
            Places.forEach((place) => {
                if(String(place.city).includes(data.search)){
                    setLocationDetails(place);
                }
            });
        }
    }, [data]);

    return (
        <div onMouseEnter={() => {
            setStyle(true);
        }} onMouseLeave={() => {
            setStyle(false);
        }} onClick={() => {
            if(data.mealsCost){
                navigate(`/${data.id}/trip/itinerary`);
            } else if((data.selectedSights && data.selectedSights.length !== 0) && !data.mealsCost){
                navigate(`/${data.id}/trip/meals`);
            } else if(!data.selectedSights || data.selectedSights.length === 0){
                navigate(`/${data.id}/trip`);
            } else {
                navigate(`/${data.id}/trip`);
            }
        }} className='w-full h-[300px] rounded-lg overflow-hidden cursor-pointer relative'>
            <img className={`w-full h-full object-cover z-[13] duration-300 ${style ? "scale-[104%]" : "scale-[100%]"}`} src={require("../../assets/tripImg.png")} />
            <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-end p-4 z-[1]'>
                <div className='w-full text-white'>
                    <div className={`flex flex-col gap-[2px] duration-300 ${style ? "mb-0":"-mb-2.5"}`}>
                        <p className='text-xl'>{locationDetails?.city + ", " + locationDetails?.country}</p>
                        <div className='w-full flex justify-between items-center gap-3'>
                            <p className='text-sm flex items-center gap-1'><FaLocationDot/> <span>{locationDetails.state}</span></p>
                            <p className='text-sm flex items-center gap-2'><BsCalendar4Week/> <span>{data.goingDate.split("-")[2]} {getMonth(Number((data.goingDate.split("-")[1])-1))}</span></p>
                        </div>
                    </div>
                    <AiOutlineArrowUp className={`text-white mt-3 rotate-[45deg] duration-300 ${style ? "text-lg" : "text-[0px]"}`} />
                </div>
            </div>
        </div>
    );
}

export default function ListingPage() {

    let trip = useContext(TripContext);
    const [alltrip, setAlltrip] = useState([]);

    useEffect(() => {
        setAlltrip(trip.data);
    }, [trip.data]);

    return (alltrip && alltrip.length > 0) && (
        <div id='listing' className='flex justify-center items-center py-16 px-8 sm:px-6'>
            <div className='w-full max-w-screen-xl flex flex-col gap-12'>
                <div className='flex items-center gap-3 justify-between'>
                    <h2 className='text-4xl font-semibold'>Your Trips</h2>
                    <HashLink smooth={true} to={"/#create"} className='py-1 px-3 bg-[linear-gradient(90deg,#10B5CB_0%,#0073A8_100%)] text-white rounded-lg'>Create new</HashLink>
                </div>
                <div className='grid grid-cols-4 gap-8'>
                    {
                        (alltrip.length > 0) && alltrip.map((trip) => {
                            return (
                                <Card data={trip} />
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}
