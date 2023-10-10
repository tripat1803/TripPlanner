import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

export default function Layout({ children }) {
    let navigate = useNavigate();
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
            </div>
            <div className='w-[45%]'>
                <iframe className='w-full h-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d439958.4171923024!2d76.08299557343754!3d30.516086499999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fc32344a6e2d7%3A0x81b346dee91799ca!2sChitkara%20University!5e0!3m2!1sen!2sin!4v1696862533035!5m2!1sen!2sin" style={{
                    border: "0px"
                }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
}
