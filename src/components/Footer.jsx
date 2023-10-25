import React from 'react'
function FooterLink({text}) {
    return (
        <div className='flex gap-[10px] items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                <path d="M1 0.900269L6 5.90027L1 10.9003" stroke="black" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p>{text}</p>
        </div>
    )
}

export default function Footer() {
    return (
        <div className='flex flex-col gap-10 px-[200px] bg-[#d9d9d9]'>
            <div className=' flex flex-col gap-4'>
                <h1 className='text-4xl	'>Looking for something else?</h1>
                <div className='flex justify-between'>
                    <div>
                        <p className='text-lg'>Connect with our experts!</p>
                        <p className='text-lg'>Get the best itineraries and offers!</p>
                    </div>
                    <button className='py-2 px-8 rounded-full text-lg text-white bg-[linear-gradient(90deg,#10B5CB_0%,#0073A8_100%)]'>Connect us</button>
                </div>
            </div>

            <div className='overflow-hidden rounded-[12px]'>
                <div className='flex justify-between items-end px-10 py-6 bg-white'>
                    <div className='flex flex-col gap-[4px]'>
                        <h1>Travelux.ai</h1>
                        <p className='w-[320px]'>Turn your next trip into a hassle-free experience with Trip Planner AI.</p>
                        <FooterLink text={"Start Planning"}/>
                    </div>
                    <div className='flex flex-col gap-[4px]'>
                        <h3>QUICK LINKS</h3>
                        <FooterLink text={"Privacy Policy"}/>
                        <FooterLink text={"Disclaimer"}/>
                    </div>
                    <div className='flex flex-col gap-[4px]'>
                        <FooterLink text={"Our team"}/>
                        <FooterLink text={"Cancellation Policy"}/>
                        <FooterLink text={"Privacy Policyr"}/>
                    </div>

                </div>
                <div className='flex justify-between px-10 py-2 bg-[#10B5CB]'>
                    <p>Crafted with ❤️ in Punjab, India</p>
                    <p>© Copyright 2022 by Travelux.ai.  All Rights Reserved</p>
                </div>
            </div>

        </div>
    );
}
