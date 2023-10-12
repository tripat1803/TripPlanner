import React, { useContext, useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { GrAdd, GrSubtract } from 'react-icons/gr';
import { MdArrowDropDown } from 'react-icons/md';
import { TripContext } from '../../context/TripState';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserState';
import toast from 'react-hot-toast';

export default function Hero() {

    let navigate = useNavigate();
    let user = useContext(UserContext);
    let trip = useContext(TripContext);
    const [data, setData] = useState({
        search: "",
        goingDate: "",
        returnDate: ""
    });
    const [counter, setCounter] = useState({
        adult: 1,
        children: 0
    });
    const [show, setShow] = useState(false);
    const [style, setStyle] = useState({});

    useEffect(() => {
        if(data.search !== "" && data.goingDate !== "" && data.returnDate !== "") {
            setStyle({
                backgroundColor: "#10B5CB"
            });
        } else {
            setStyle({
                backgroundColor: "#999999"
            });
        }
    }, [data]);

    const handleCreateTrip = () => {
        if(user.isAuthenticated()){
            if (data.search !== "" && data.goingDate !== "" && data.returnDate !== "") {
                trip.setData((prev) => [
                    ...prev,
                    {
                        id: trip.data.length+1,
                        search: data.search,
                        goingDate: data.goingDate,
                        returnDate: data.returnDate,
                        adult: counter.adult,
                        children: counter.children
                    }
                ]);
                trip.updateData();
                navigate(`/${trip.data.length+1}/trip`);
            } else {
                toast.error("Please fill all the fields");
            }
        } else {
            toast.error("Please login to create a trip");
        }
    }

    return (
        <div style={{
            userSelect: "none"
        }} id='create' className='min-h-screen py-4 flex justify-center items-center px-8 sm:px-16 relative'>
            <img className='absolute top-0 left-0 w-full h-full object-cover z-[1]' src={require("../../assets/background.png")} />
            <div className='absolute top-0 left-0 w-full h-full bg-[#2F6A7F] mix-blend-hard-light z-[2]'></div>
            <div className='max-w-screen-2xl w-full flex justify-center items-center z-[13]'>
                <div className='w-[max-content] flex flex-col gap-16'>
                    <div className='flex flex-col gap-1 text-white'>
                        <h1 className='text-3xl xxs:text-4xl ss:text-5xl'>Explore the world</h1>
                        <h1 className='text-3xl xxs:text-4xl ss:text-5xl'>like never before</h1>
                    </div>
                    <div className='bg-white rounded-lg flex gap-4'>
                        <div className='w-[40%] flex items-center pl-3'>
                            <CiSearch size={24} />
                            <input onChange={(e) => {
                                setData({
                                    ...data,
                                    search: e.target.value
                                });
                            }} type='text' placeholder='Where are you going?' className='flex-1 py-2 px-3 outline-none' />
                        </div>
                        <div className='flex items-center'>
                            <input onChange={(e) => {
                                setData({
                                    ...data,
                                    goingDate: e.target.value
                                });
                            }} type='date' placeholder='Going Date' className='flex-1 py-2 outline-none' />
                        </div>
                        <div className='flex items-center'>
                            <input onChange={(e) => {
                                setData({
                                    ...data,
                                    returnDate: e.target.value
                                });
                            }} type='date' className='flex-1 py-2 outline-none' />
                        </div>
                        <div className='flex items-center flex-col'>
                            <div onClick={() => {
                                setShow(!show);
                            }} className='flex items-center gap-2 cursor-pointer'>
                                <p className='whitespace-nowrap py-2'>Number of people</p>
                                <MdArrowDropDown size={24} />
                            </div>
                            <div className='w-full relative'>
                                <div className={`absolute px-2.5 flex flex-col gap-4 duration-300 w-[150%] ${show ? "h-[max-content] py-3" : "h-[0px] py-0"} rounded-b-lg bg-white top-0 z-[13] overflow-hidden`}>
                                    <div className='flex items-center justify-between'>
                                        <p className='font-semibold'>{counter.adult} Adult:</p>
                                        <div className='flex gap-1 items-center !text-[#10B5CB]'>
                                            <GrSubtract onClick={() => {
                                                setCounter({
                                                    ...counter,
                                                    adult: counter.adult > 1 ? counter.adult - 1 : 1
                                                });
                                            }} size={24} className='cursor-pointer border-[2.5px] border-[#10B5CB] p-[2.5px] rounded-full font-semibold text-[#10B5CB]' />
                                            <GrAdd onClick={() => {
                                                setCounter({
                                                    ...counter,
                                                    adult: counter.adult + 1
                                                });
                                            }} size={24} className='cursor-pointer border-[2.5px] border-[#10B5CB] p-[2.5px] rounded-full font-semibold text-[#10B5CB]' />
                                        </div>
                                    </div>
                                    <div className='flex items-center justify-between'>
                                        <p className='font-semibold'>{counter.children} Children:</p>
                                        <div className='flex gap-1 items-center'>
                                            <GrSubtract onClick={() => {
                                                setCounter({
                                                    ...counter,
                                                    children: counter.children > 0 ? counter.children - 1 : 0
                                                });
                                            }} size={24} className='cursor-pointer border-[2.5px] border-[#10B5CB] p-[2.5px] rounded-full font-semibold' />
                                            <GrAdd onClick={() => {
                                                setCounter({
                                                    ...counter,
                                                    children: counter.children + 1
                                                });
                                            }} size={24} className='cursor-pointer border-[2.5px] border-[#10B5CB] p-[2.5px] rounded-full font-semibold' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button onClick={handleCreateTrip} style={style} className='whitespace-nowrap py-2 px-3 rounded-r-lg text-white'>Create Plan</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
