import React, { useContext } from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { TripContext } from '../../context/TripState';

export default function Layout({ children, portal, handlePrev, handleNext=()=>{}, location, handleNextLink }) {
    let navigate = useNavigate();
    let trip = useContext(TripContext);
    return (
        <div className='flex h-screen'>
            <div className='flex-1 h-full bg-[#F0F0F0] flex flex-col'>
                <div className='flex gap-3 text-lg items-center p-4 bg-white'>
                    <BiArrowBack onClick={() => {
                        navigate("/");
                    }} size={26} className='rounded-full p-1 cursor-pointer hover:bg-[rgba(0,0,0,0.1)]' />
                    Travelux.ai
                </div>
                <div className='flex-1 p-8 flex flex-col gap-12 overflow-y-scroll remove-scroll'>
                    {children}
                </div>
                <div className='bg-white py-3 px-8 flex gap-3 justify-between'>
                    <div>
                        <div className='flex gap-3 items-center'>
                            <p className='text-2xl'>Total: ₹50</p>
                            {/* <p className='text-[#666666]'>Sights cost: ₹50</p> */}
                        </div>
                        <p className='text-sm text-[#999999]'>Select atleast 3 places to visit</p>
                    </div>
                    <div className='flex items-center gap-3'>
                        {(handlePrev) && <button onClick={handlePrev} className='py-1 px-3 flex gap-2 items-center rounded-full text-[#999999] hover:underline'><BsArrowLeft size={18} /> Back</button>}
                        {
                            handleNextLink ? <HashLink smooth={true} to={handleNextLink} className='py-1 px-3 flex gap-2 items-center rounded-full bg-[#10B5CB] text-white'>Next <BsArrowRight size={18} /></HashLink> : <button onClick={handleNext} className='py-1 px-3 flex gap-2 items-center rounded-full bg-[#10B5CB] text-white'>Next <BsArrowRight size={18} /></button>
                        }
                    </div>
                </div>
            </div>
            <div className='w-[45%] relative'>
                {location}
                <div id='portal' className='absolute bottom-4 w-[95%] left-[50%] translate-x-[-50%] bg-white rounded-lg z-[13]'>
                    {portal}
                </div>
            </div>
        </div>
    );
}
