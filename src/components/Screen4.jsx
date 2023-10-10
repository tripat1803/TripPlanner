import React from 'react'
import ocean from '../assets/screen1.jpg'
import { Link } from 'react-router-dom'

const Screen4 = () => {
  return (
    <div>
        <div className=' absolute' style={{
            height:'100%',
            width:'100%',
            backgroundImage: `url(${ocean})`
        }} >
            <h3 className='mt-5 pt-32 text-white font-semibold text-6xl pl-52'>Looking for something else?</h3>
            <div className='flex justify-evenly'>
                <div className='flex w-1/2'>
                    <p className='text-white text-lg pl-52 mt-3 flex-col'>Connect with our experts!</p>
                    <p className='text-white text-lg pl-52 mt-3 flex-col'>Get the best itineraries and offers!</p>
                </div>
                <button className='flex justify-between px-4 py-2 text-white font-semibold bg-blue-400 hover:bg-blue-600 rounded-3xl'>Connect</button>
            </div>
            <div className='mx-auto mt-10 rounded-lg bg-white w-[60%] h-[30%] flex-col-reverse flex'>
        
                <div className='bg-blue-400 flex justify-between px-3 h-8 items-center font-semibold text-white'>
                    <p>Crafted with ❤️ in Punjab, India</p>
                    <p>Copyright 2022 by Travelux.ai. All rights Reserved</p>
                </div>
                <div className='mb-10'>
                    <h2 className='font-semibold text-2xl pl-12'>Travelux.ai</h2>
                    <p className='pl-12 w-[35%]'>Turn your next trip into hassle-free experience with Trip Planner Ai.</p>
                    <Link to="/home" className='pl-12'> &gt; Start Planning</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Screen4