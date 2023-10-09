import React from 'react';
import { CiSearch } from 'react-icons/ci';

export default function Hero() {
    return (
        <div className='min-h-screen py-4 flex justify-center items-center px-8 sm:px-16 relative'>
            <img className='absolute top-0 left-0 w-full h-full object-cover z-[1]' src={require("../../assets/background.png")} />
            <div className='absolute top-0 left-0 w-full h-full bg-[#2F6A7F] mix-blend-hard-light z-[2]'></div>
            <div className='max-w-screen-2xl w-full flex justify-center items-center z-[13]'>
                <div className='w-[max-content] flex flex-col gap-16'>
                    <div className='flex flex-col gap-1 text-white'>
                        <h1 className='text-3xl xxs:text-4xl ss:text-5xl'>Explore the world</h1>
                        <h1 className='text-3xl xxs:text-4xl ss:text-5xl'>like never before</h1>
                    </div>
                    <div className='bg-white rounded-lg overflow-hidden flex gap-4'>
                        <div className='w-[40%] flex items-center pl-3'>
                            <CiSearch size={24} />
                            <input type='text' placeholder='Where are you going?' className='flex-1 py-2 px-3 outline-none' />
                        </div>
                        <div className='flex items-center'>
                            <input type='date' placeholder='Going Date' className='flex-1 py-2 outline-none' />
                        </div>
                        <div className='flex items-center'>
                            <input type='date' className='flex-1 py-2 outline-none' />
                        </div>
                        <div className='flex items-center'>
                            <input type='number' placeholder='Where are you going?' className='flex-1 py-2 outline-none' />
                            {/* <div className='absolute h-[100px] bg-white'>

                            </div> */}
                        </div>
                        <button className='whitespace-nowrap py-2 px-3 bg-[#999999] text-white'>Create Plan</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
