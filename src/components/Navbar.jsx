import React, { useContext } from 'react';
import { UserContext } from '../context/UserState';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {

    let user = useContext(UserContext);
    let navigate = useNavigate();
    let location = useLocation();

    return (
        <div className={`w-full ${location.pathname.includes("trip") ? "hidden" : "flex"} ${location.pathname === "/auth" && "hidden"} justify-center items-center py-4 px-8 sm:px-16 bg-white fixed top-0 z-[30]`}>
            <div className='max-w-screen-2xl w-full flex gap-4 justify-between items-center'>
                <div onClick={() => {
                    navigate("/");
                }} className='flex gap-3 items-center cursor-pointer'>
                    <div className='w-6 h-6 rounded-full bg-gray-800'></div>
                    <p className='text-lg'>Travelux.ai</p>
                </div>
                <div className='flex gap-4 items-center'>
                    {
                        user.data && user.data.fullname ? <div className='w-10 h-10 border flex justify-center items-center rounded-full cursor-pointer'>
                            <p>{user.data.fullname[0]}</p>
                        </div> : <button onClick={() => {
                            navigate('/auth');
                        }} className='py-1 px-3 rounded-lg text-lg text-white bg-[linear-gradient(90deg,#10B5CB_0%,#0073A8_100%)]'>Signin</button>
                    }
                </div>
            </div>
        </div>
    )
}