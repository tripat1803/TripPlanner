import React from 'react';
import Layout from '../components/Trip/Layout';
import { BsBookmark } from 'react-icons/bs';
import { LuSearch } from 'react-icons/lu';
import { AiFillStar } from 'react-icons/ai';

function TripCard() {
    return (
        <div style={{
            border: "1px solid transparent"
        }} className='h-[max-content] flex flex-col rounded-lg overflow-hidden bg-white'>
            <img src={require("../assets/background.png")} className='w-full h-[150px] object-cover' />
            <div className='p-2 h-[max-content] flex flex-col gap-3'>
                <p className='text-2xl font-semibold'>Aguada Fort</p>
                <div className='flex flex-col gap-1'>
                    <div className='flex items-center gap-2'>
                        <p className='text-lg text-[#666666]'>4.2</p>
                        <div className='flex items-center gap-[2px]'>
                            <AiFillStar className="text-[#F4B400]" />
                            <AiFillStar className="text-[#F4B400]" />
                        </div>
                    </div>
                    <p className='text-[#666666]'>1612 Portuguese fortress offering ocean views & an abandoned light</p>
                </div>
                <div className='flex justify-between gap-3 items-center'>
                    <p className='text-[#666666]'>1 hour 30 min</p>
                    <p className='text-[#666666]'><span className='text-lg text-black'><sup>₹</sup>50</span> per adult</p>
                </div>
            </div>
        </div>
    );
}

export default function Trip() {
    return (
        <Layout>
            <div className='flex flex-col gap-3'>
                <h1 className='text-4xl'>Top sights in Goa</h1>
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
                    <TripCard />
                    <TripCard />
                    <TripCard />
                    <TripCard />
                    <TripCard />
                    <TripCard />
                </div>
            </div>
        </Layout>
    )
}
