import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../context/UserState';
import { useLocation, useNavigate } from 'react-router-dom';
import { PiSignOutBold } from 'react-icons/pi';
import { PublicApi } from '../utils/Api';

export default function Navbar() {

    let user = useContext(UserContext);
    let navigate = useNavigate();
    let location = useLocation();
    const [dropDown, setDropDown] = useState(false);

    return (
        <>
            <div className={`w-full ${location.pathname.includes("trip") ? "hidden" : "flex"} ${location.pathname === "/auth" && "hidden"} justify-center items-center py-4 px-8 sm:px-16 bg-white fixed top-0 z-[30]`}>
                <div className='max-w-screen-2xl w-full flex gap-4 justify-between items-center'>
                    <div onClick={() => {
                        navigate("/");
                    }} className='flex gap-3 items-center cursor-pointer'>
                        <div className='w-6 h-6 rounded-full bg-gray-800'></div>
                        <p className='font-semibold text-[24px]'>Travelux.ai</p>
                    </div>
                    <div className='flex gap-4 items-center'>
                        {
                            user.data && user.data.fullname ? <div className='relative w-[max-content] h-[max-content] z-[40]'>
                                <div onClick={() => {
                                    setDropDown(!dropDown);
                                }} className='w-10 h-10 border flex justify-center items-center rounded-full cursor-pointer'>
                                    <p>{user.data.fullname[0]}</p>
                                </div>
                                {(dropDown) && <div className='bg-white absolute top-[105%] right-0 rounded-lg drop-shadow-md overflow-hidden'>
                                    <button onClick={async () => {
                                        PublicApi.get("/api/v1/users/logout").then((res) => {
                                            user.setData(null);
                                            setDropDown(false);
                                            localStorage.removeItem("userData");
                                        }).catch((err) => {
                                            console.log(err);
                                        });
                                    }} className='flex px-3 py-2 items-center gap-3 hover:bg-[#10B5CB] hover:bg-opacity-20'>Signout <PiSignOutBold/></button>
                                </div>}
                            </div> : <button onClick={() => {
                                navigate('/auth');
                            }} className='py-1 px-3 rounded-lg text-lg text-white bg-[linear-gradient(90deg,#10B5CB_0%,#0073A8_100%)]'>Signin</button>
                        }
                        {(dropDown) && <div onClick={() => {
                            setDropDown(false);
                        }} className='fixed top-0 left-0 w-screen h-screen bg-transparent z-[35]'></div>}
                    </div>
                </div>
            </div>
       </>
    )
}