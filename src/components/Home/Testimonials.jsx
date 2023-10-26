import React from 'react';
import {BsQuote} from "react-icons/bs"
import "../../styles/testimonial.css";
import tushar from "../../assets/tushar.webp";
import david from "../../assets/david_jordan.webp";
import steve from "../../assets/steve_j.webp";

function TestimonialCard({name, designation, message, image}) {
    return (
        <div className="card">
            <div className="img">
                <img className="rounded-full" src={image} />
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
                        <TestimonialCard image={david} name={"David Jordan"} designation={"Engineer @Wipro"} message={"Travelux.ai is a great tool that helps you save time and also headaches when you are planning to go somewhere, it's like a relief of the stress that comes at the time of travel either by not being decisive or not knowing where to go in the first place."}/>
                        <TestimonialCard image={tushar} name={"Tushar"} designation={"Traveller"} message={"Travelux.ai has provided me with so many amazing options on how to plan a trip completely. Right from the arrival to the destination till departure. So much detailed information in such an amazing user friendly interface. Thats just WOW."}/>
                    </div>

                    <div className="flex gap-5 w-full">
                        <TestimonialCard image={steve} name={"Steve J"} designation={"CEO"} message={"I love to travel, but hate planning and often book last minute. This app helps me quickly put together an agenda for my trip, removing a lot of the decision-fatigue that plagues trip planning. I've used it for weekend trips with friends, or even when I have free time on a work trip."}/>
                        <TestimonialCard image={steve} name={"Steve J"} designation={"CEO"} message={"I love to travel, but hate planning and often book last minute. This app helps me quickly put together an agenda for my trip, removing a lot of the decision-fatigue that plagues trip planning. I've used it for weekend trips with friends, or even when I have free time on a work trip."}/>
                    </div>
                </div>
            </div>
        </div>
    );
}