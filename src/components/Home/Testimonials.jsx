import React from 'react';
import {BsQuote} from "react-icons/bs"
import "../../styles/testimonial.css";

function TestimonialCard({name, designation, message}) {
    return (
        <div className="card">
            <div className="img">
                <svg className='w-full h-full' viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle id="Ellipse 1" cx="42.1667" cy="41.6667" r="41.6667" fill="#D9D9D9" />
                </svg>
            </div>
            <div className="content">
                <div className="name">
                    <h3 className='text-lg font-semibold'>{name}</h3>
                    <p>{designation}</p>
                </div>
                <div className="testimonial">
                    <BsQuote size={80}/>
                    <p>{message}</p>
                </div>
                {/* <p style={{
                    textAlign: "right"
                }} className='text-transparent bg-clip-text bg-[linear-gradient(90deg,#10B5CB_0%,#0073A8_100%)]'>Continue Reading</p> */}
            </div>
        </div>
    )
}

export default function Testimonials() {
    return (
        <div className='flex justify-center'>
            <div className="flex flex-col items-center gap-[48px] px-[64px] py-[32px]">
                <div className="flex flex-col gap-[8px] items-center">
                    <h1 className='text-4xl font-semibold'>Don't take our word for it</h1>
                    <p style={{
                        width: "85%",
                        textAlign: "center",
                    }} className='text-[#666666]'>See what our users have to say about revolutionizing their travel experiences with Travelux.ai</p>
                </div>
                <div className="flex flex-col gap-[20px]">
                    <div className="flex gap-5 w-full">
                        <TestimonialCard name={"David Jordan"} designation={"Engineer @Wipro"} message={"Travelux.ai is a great tool that helps you save time and also headaches when you are planning to go somewhere, it is like a relief of the stress that usually comes at the time of travel either by not being decisive or not knowing where to go in the first place."}/>
                        <TestimonialCard name={"Tushar"} designation={"Traveller"} message={"Travelux.ai has provided me with so many amazing options on how to plan a trip completely. Right from the arrival to the destination till departure of that country. So much detailed information in such an amazing user friendly interface. Thats just WOW."}/>
                    </div>

                    <div className="flex gap-5 w-full">
                        <TestimonialCard/>
                        <TestimonialCard/>
                    </div>
                </div>
            </div>
        </div>
    );
}
