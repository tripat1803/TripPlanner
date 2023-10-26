import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { PublicApi } from '../utils/Api';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserState';

function Signup({ setIsSignup }) {

    let user = useContext(UserContext);
    let navigate = useNavigate();
    const [data, setData] = useState({
        fullname: '',
        providerId: '',
        password: '',
    });
    const [loader, setLoader] = useState(false);

    const handleContinue = () => {
        if (data.fullname && data.providerId && data.password) {
            setLoader(true);
            PublicApi.post("/api/v1/users/register", data).then((res) => {
                user.fetchUserDetailsWithoutLoader();
                navigate('/');
                setIsSignup(false);
                setData({
                    fullname: '',
                    providerId: '',
                    password: '',
                });
                setLoader(false);
            }).catch((err) => {
                setData({
                    fullname: '',
                    providerId: '',
                    password: '',
                });
                setLoader(false);
            })
        }
    }

    return (
        <div className='flex min-h-screen relative'>
            <div onClick={() => {
                navigate("/");
            }} className='absolute top-3 left-3 flex gap-3 items-center cursor-pointer'>
                <div className='w-6 h-6 rounded-full bg-gray-800'></div>
                <p className='text-lg font-semibold'>Travelux.ai</p>
            </div>
            <div className='flex-1 p-8 flex justify-center items-center'>
                <div className='w-full ss:w-[80%] xlg:w-[85%] lg:w-[65%] 2xl:w-[50%] md:max-w-[550px] flex flex-col gap-8'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-3xl xxs:text-4xl ss:text-5xl font-medium whitespace-nowrap'>Create Account</h1>
                        <p className='text-base xxs:text-lg'>Already have an account? <u onClick={() => {
                            setIsSignup(false);
                        }} className='text-[#10B5CB] cursor-pointer'>SignIn</u></p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <input value={data.fullname} onChange={(e) => {
                            setData({ ...data, fullname: e.target.value });
                        }} type='text' placeholder='Full name' className='border-b border-[#333333] w-full py-1.5 text-base xxs:text-lg outline-none' />
                        <input value={data.providerId} onChange={(e) => {
                            setData({ ...data, providerId: e.target.value });
                        }} type='text' placeholder='Email' className='border-b border-[#333333] w-full py-1.5 text-base xxs:text-lg outline-none' />
                        <input value={data.password} onChange={(e) => {
                            setData({ ...data, password: e.target.value });
                        }} type='password' placeholder='Password' className='border-b border-[#333333] w-full py-1.5 text-base xxs:text-lg outline-none' />
                    </div>
                    <button disabled={loader} onClick={() => {
                        handleContinue();
                    }} className='w-full px-4 py-1 sm:py-1.5 bg-[#10B5CB] text-white rounded-lg text-base xxs:text-lg'>Continue</button>
                </div>
            </div>
            <div className='flex-1 hidden md:block'>
                <img className='w-full h-full object-cover' src={require("../assets/background.png")} />
            </div>
        </div>
    );
}

function Signin({ setIsSignup }) {

    let user = useContext(UserContext);
    let navigate = useNavigate();
    const [data, setData] = useState({
        providerId: '',
        password: '',
    });
    const [loader, setLoader] = useState(false);

    const handleContinue = () => {
        if (data.providerId && data.password) {
            setLoader(true);
            PublicApi.post("/api/v1/users", data).then((res) => {
                user.fetchUserDetailsWithoutLoader();
                setData({
                    providerId: '',
                    password: '',
                });
                navigate('/');
                setLoader(false);
            }).catch((err) => {
                setData({
                    providerId: '',
                    password: '',
                });
                console.log(err);
                setLoader(false);
            })
        }
    }
    return (
        <div className='flex min-h-screen relative'>
            <div onClick={() => {
                navigate("/");
            }} className='absolute top-3 left-3 flex gap-3 items-center cursor-pointer'>
                <div className='w-6 h-6 rounded-full bg-gray-800'></div>
                <p className='text-lg font-semibold'>Travelux.ai</p>
            </div>
            <div className='flex-1 p-8 flex justify-center items-center'>
                <div className='w-full ss:w-[80%] xlg:w-[85%] lg:w-[65%] 2xl:w-[50%] md:max-w-[550px] flex flex-col gap-8'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-3xl xxs:text-4xl ss:text-5xl font-medium whitespace-nowrap'>Welcome back</h1>
                        <p className='text-base xxs:text-lg'>Doesn't have an account? <u onClick={() => {
                            setIsSignup(true);
                        }} className='text-[#10B5CB] cursor-pointer'>SignUp</u></p>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <input value={data.providerId} onChange={(e) => {
                            setData({ ...data, providerId: e.target.value });
                        }} type='text' placeholder='Email' className='border-b border-[#333333] w-full py-1.5 text-base xxs:text-lg outline-none' />
                        <input value={data.password} onChange={(e) => {
                            setData({ ...data, password: e.target.value });
                        }} type='password' placeholder='Password' className='border-b border-[#333333] w-full py-1.5 text-base xxs:text-lg outline-none' />
                    </div>
                    <button disabled={loader} onClick={() => {
                        handleContinue();
                    }} className='w-full px-4 py-1 sm:py-1.5 bg-[#10B5CB] text-white rounded-lg text-base xxs:text-lg'>Continue</button>
                    <div className='flex gap-3 items-center'>
                        <hr className='flex-1 border-[#333333]' />
                        <span>or</span>
                        <hr className='flex-1 border-[#333333]' />
                    </div>
                    <button className='w-full px-4 py-1 sm:py-1.5 border border-[#333333] text-[#333333] rounded-lg text-base xxs:text-lg flex gap-2 items-center justify-center'><FcGoogle size={30} /> <span>Sign in with Google</span></button>
                </div>
            </div>
            <div className='flex-1 hidden md:block'>
                <img className='w-full h-full object-cover' src={require("../assets/background.png")} />
            </div>
        </div>
    );
}

const Authentication = () => {
    const [isSignup, setIsSignup] = useState(false);
    return (
        isSignup ? <Signup setIsSignup={setIsSignup} /> : <Signin setIsSignup={setIsSignup} />
    )
}

export default Authentication;