import React from 'react';
import Layout from '../components/Trip/Layout';
import { BsFillBuildingFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

export default function Hotels({ indexId, tripData }) {

    let navigate = useNavigate();

    const handleNext = () => {
        navigate(`/${indexId}/trip/itinerary`);
    }
    const handlePrev = () => {
        navigate(`/${indexId}/trip/meals`);
    }

    return (
        <Layout handleNext={handleNext} handlePrev={handlePrev} location={tripData && tripData.location} >
            <div className='flex flex-col gap-3'>
                <h1 className='text-4xl'>Set your lodging (Optional)</h1>
                <p className='text-[#999999]'>Add you lodging, and we'll craft the ideal route around your stay. Optimized adventures start at your doorstep! 🏨</p>
            </div>
            <div className='flex px-4 text-lg items-center rounded-full bg-white border border-[#CCCCCC] overflow-hidden'>
                <BsFillBuildingFill size={20} className='text-[#CCCCCC]' />
                <input placeholder='Search Here' className='w-full px-4 py-1 outline-none' />
            </div>
        </Layout>
    )
}
