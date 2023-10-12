import React, { useState } from 'react';
import Layout from '../components/Trip/Layout';
import { FaBusAlt } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import { RxReload } from 'react-icons/rx';
import { useNavigate } from 'react-router-dom';

function Portal({ setPortal }) {
    return (
        <div className='p-4 flex flex-col gap-3'>
            <div className='flex gap-2'>
                <img className='w-[80px] h-[90px] rounded-lg object-cover' src={require("../assets/jallianwalabagh.png")} />
                <div className='flex-1 flex flex-col gap-1'>
                    <div className='flex gap-2 items-center justify-between'>
                        <p className='font-medium'>Jallianwala Bagh</p>
                        <IoClose onClick={() => {
                            setPortal(null);
                        }} size={28} className='p-1 cursor-pointer bg-[#CCCCCC] bg-opacity-20 hover:bg-opacity-100 rounded-full' />
                    </div>
                    <p className='text-xs font-medium text-[#999999]'>Golden Temple Rd, Jallan Wala Bagh, Katra Ahluwalia, Amritsar, Amritsar Cantt.,</p>
                    <p className='text-xs font-medium text-[red]'>Closed</p>
                </div>
            </div>
            <div>
                <p className='text-[#333333] text-sm'>Public garden with a memorial, in the shape of an eternal flame, to the massacre of 13 April 1919.</p>
            </div>
        </div>
    )
}

function PerDayBreakdown({setPortal}) {
    return (
        <div onClick={() => {
            setPortal(<Portal setPortal={setPortal} />);
        }} className='p-4 flex flex-col gap-3 bg-[#CCCCCC] bg-opacity-20 rounded-lg cursor-pointer'>
            <p className='text-[#10B5CB]'>Jallianwala Bagh</p>
            <p className='text-xs font-extralight'>Public garden with a memorial, in the shape of an eternal flame, to the massacre of 13 April 1919.</p>
            <div className='flex gap-2 items-center'>
                <p className='after:w-1 after:h-1 after:rounded-full after:bg-[#666666] flex gap-2 items-center text-xs font-medium'>8:00pm</p>
                <p className='px-[8px] py-[2px] bg-[#10B5CB] bg-opacity-10 text-[#10B5CB] text-[0.6rem] font-medium rounded-full'>₹ 3</p>
            </div>
        </div>
    );
}

function ItineraryCard({ date="22 Oct", setPortal }) {

    const breakdownArr = [
        <PerDayBreakdown setPortal={setPortal} />,
        <PerDayBreakdown setPortal={setPortal} />,
        <PerDayBreakdown setPortal={setPortal} />
    ];
    const [dropDown, setDropDown] = useState(false);

    return (
        <div className='flex flex-col'>
            <div onClick={() => {
                setDropDown(!dropDown);
            }} className='py-1.5 px-3 flex items-center gap-3 cursor-pointer font-medium border-2 border-[#CCCCCC] hover:border-[#10B5CB] rounded-lg'>
                <p>{date}</p>
            </div>
            {(breakdownArr) && <div style={dropDown ? {
                height: "max-content",
                paddingTop: "24px",
                paddingBottom: "24px"
            } : {
                height: "0px",
                paddingTop: "0px",
                paddingBottom: "0px"
            }} className='px-3 overflow-hidden duration-300'>
                {
                    breakdownArr.map((item, index) => (
                        <div key={index} className='flex flex-col'>
                            {item}
                            {(index < breakdownArr.length - 1) && <div className='flex gap-2 items-center pl-12'>
                                <div className='border border-dashed border-[#CCCCCC] h-[35px]'></div>
                                <div className='flex-1 flex items-center gap-2'>
                                    <FaBusAlt size={12} className='text-[#666666]' />
                                    <p className='text-[0.55rem] text-[#666666]'>400-500 min</p>
                                </div>
                            </div>}
                        </div>
                    ))
                }
            </div>}
        </div>
    );
}

export default function Itinerary({ indexId, tripData }) {

    let navigate = useNavigate();
    const [portal, setPortal] = useState(null);

    return (
        <Layout handlePrev={() => {
            navigate(`/${indexId}/trip/meals`);
        }} handleNextLink={"/#listing"} portal={portal} location={tripData && tripData.location}>
            <div className='flex flex-col gap-3'>
                <p className='text-[#999999]'>Your trip to</p>
                <h1 className='text-4xl font-medium'>Aguada Fort, Goa, India</h1>
                <p className='animation-rotate w-[max-content] text-[#10B5CB] cursor-pointer duration-150 hover:scale-[105%] hover:underline text-[0.80rem] flex gap-2 items-center'><RxReload className='font-semibold duration-200' />Try new preferences</p>
            </div>
            <div className='flex flex-col gap-5'>
                <div className='flex gap-3 items-center justify-between'>
                    <p className='text-lg font-semibold'>Itinerary</p>
                    <button className='bg-white border border-[#10B5CB] text-[#10B5CB] rounded-lg px-3 py-[2px] text-xs'>Share</button>
                </div>
                <div className='flex flex-col gap-3'>
                    <ItineraryCard setPortal={setPortal} />
                    <ItineraryCard setPortal={setPortal} />
                </div>
            </div>
            <div className='flex gap-3 items-center'>
                <p className='text-lg font-semibold'>Budget breakdown:</p>
                <p className='text-sm text-[#333333]'><span className='text-base'>₹124</span> in total</p>
            </div>
        </Layout>
    )
}
