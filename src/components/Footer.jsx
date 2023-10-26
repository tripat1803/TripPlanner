import React from 'react'
function FooterLink({ text }) {
    return (
        <div className='flex gap-[10px] items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" width="7" height="12" viewBox="0 0 7 12" fill="none">
                <path d="M1 0.900269L6 5.90027L1 10.9003" stroke="#666666" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p className='font-medium text-[#666666]'>{text}</p>
        </div>
    )
}

export default function Footer() {
    return (
        <div className='flex justify-center px-8 sm:px-16 py-20 bg-[#d9d9d9] relative'>
            <img className='absolute top-0 left-0 w-full h-full object-cover z-[1]' src={require("../assets/background.png")} />
            <div className='absolute top-0 left-0 w-full h-full bg-[#2F6A7F] mix-blend-hard-light z-[2]'></div>
            <div className='flex flex-col gap-10 xl:w-[75%]'>
                <div className='z-[13] flex flex-col gap-4'>
                    <h1 className='text-[38px] md:text-[44px] lg:text-[54px]	text-white font-semibold'>Looking for something else?</h1>
                    <div className='flex justify-between'>
                        <div className='text-lg text-white'>
                            <p>Connect with our experts!</p>
                            <p>Get the best itineraries and offers!</p>
                        </div>
                        <button className='py-0.5 px-8 rounded-full font-medium text-lg text-white bg-[linear-gradient(90deg,#10B5CB_0%,#0073A8_100%)]'>Connect us</button>
                    </div>
                </div>

                <div className='z-[13] overflow-hidden rounded-[12px]'>
                    <div className='flex justify-between items-end px-10 py-6 bg-white'>
                        <div className='flex flex-col gap-[4px]'>
                            <h1 className='text-[24px] font-semibold'>Travelux.ai</h1>
                            <p className='w-[320px] text-[#666666]'>Turn your next trip into a hassle-free experience with Trip Planner AI.</p>
                            <FooterLink text={"Start Planning"} />
                        </div>
                        <div className='flex flex-col gap-[4px]'>
                            <h3 className='font-semibold text-[#666666] text-lg'>QUICK LINKS</h3>
                            <FooterLink text={"Privacy Policy"} />
                            <FooterLink text={"Disclaimer"} />
                        </div>
                        <div className='flex flex-col gap-[4px]'>
                            <FooterLink text={"Our team"} />
                            <FooterLink text={"Cancellation Policy"} />
                            <FooterLink text={"Privacy Policyr"} />
                        </div>
                    </div>
                    <div className='flex justify-between px-10 py-2 bg-[#10B5CB] text-sm font-medium text-white'>
                        <p>Crafted with ❤️ in Punjab, India</p>
                        <p>© Copyright 2022 by Travelux.ai.  All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
