import React, { useContext, useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { MdArrowDropDown } from 'react-icons/md';
import { TripContext } from '../../context/TripState';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserState';
import toast from 'react-hot-toast';
import { PublicApi } from '../../utils/Api';
import { IoAddOutline } from 'react-icons/io5';
import { FiMinus } from 'react-icons/fi';


function calculateMaxReturningDate(date, month, year) {
    date = Number(date);
    month = Number(month);
    year = Number(year);
    if (date + 10 > 30) {
        if (month >= 12) {
            year++;
            month = 1;
        } else {
            month++;
        }
        date = 10 - (30 - date);
    } else {
        date += 10;
    }
    return `${year}-${(String(month).length === 1) ? ("0" + month) : (month)}-${(String(date).length === 1) ? ("0" + date) : (date)}`;
}

let dateTime = new Date();

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
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        if (data.search !== "" && data.goingDate !== "" && data.returnDate !== "") {
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
        if (user.isAuthenticated()) {
            if (data.search !== "" && data.goingDate !== "" && data.returnDate !== "") {
                setLoader(true);
                PublicApi.post("/api/v1/trip", {
                    search: data.search,
                    goingDate: data.goingDate,
                    returnDate: data.returnDate,
                    adults: counter.adult,
                    children: counter.children
                }).then((res) => {
                    trip.setData((prev) => [
                        ...prev,
                        {
                            id: res.data._id,
                            search: data.search,
                            goingDate: data.goingDate,
                            returnDate: data.returnDate,
                            adults: counter.adult,
                            children: counter.children
                        }
                    ]);
                    trip.updateData();
                    navigate(`/${res.data._id}/trip`);
                    setLoader(false);
                }).catch((err) => {
                    toast.error("Something went wrong");
                    setLoader(false);
                });
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
                            <input value={data.goingDate} onChange={(e) => {
                                setData({
                                    ...data,
                                    goingDate: e.target.value,
                                    returnDate: ""
                                });
                            }} type='date' min={String(dateTime.getFullYear() + "-" + ((String(dateTime.getMonth() + 1).length === 1) ? ("0" + (dateTime.getMonth() + 1)) : dateTime.getMonth() + 1) + "-" + ((String(dateTime.getDate() + 1).length === 1) ? ("0" + (dateTime.getDate() + 1)) : dateTime.getDate() + 1))} placeholder='Going Date' className='flex-1 py-2 outline-none' />
                        </div>
                        <div className='flex items-center'>
                            <input value={data.returnDate} onChange={(e) => {
                                setData({
                                    ...data,
                                    returnDate: e.target.value
                                });
                            }} type='date' min={String(data.goingDate.split("-")[0] + "-" + data.goingDate.split("-")[1] + "-" + ((String(Number(data.goingDate.split("-")[2]) + 1).length === 1) ? ("0" + (Number(data.goingDate.split("-")[2]) + 1)) : (Number(data.goingDate.split("-")[2]) + 1)))} max={calculateMaxReturningDate(data.goingDate.split("-")[2], data.goingDate.split("-")[1], data.goingDate.split("-")[0])} className='flex-1 py-2 outline-none' />
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
                                            <FiMinus onClick={() => {
                                                setCounter({
                                                    ...counter,
                                                    adult: counter.adult > 1 ? counter.adult - 1 : 1
                                                });
                                            }} size={24} className='cursor-pointer border-[2.5px] border-[#10B5CB] p-[2.5px] rounded-full font-semibold text-[#10B5CB]' />
                                            <IoAddOutline onClick={() => {
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
                                            <FiMinus onClick={() => {
                                                setCounter({
                                                    ...counter,
                                                    children: counter.children > 0 ? counter.children - 1 : 0
                                                });
                                            }} size={24} className='cursor-pointer border-[2.5px] border-[#10B5CB] p-[2.5px] rounded-full font-semibold' />
                                            <IoAddOutline onClick={() => {
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
