import React from 'react';
import "../../styles/testimonial.css";

function TestimonialCard() {
    return (
        <div className="card">
            <div className="img">
                <svg className='w-full h-full' viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle id="Ellipse 1" cx="42.1667" cy="41.6667" r="41.6667" fill="#D9D9D9" />
                </svg>
            </div>
            <div className="content">
                <div className="name">
                    <h3>Lorem ipsum Lorem</h3>
                    <p>Lorem ipsum Lorem</p>
                </div>
                <div className="testimonial">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="28" viewBox="0 0 17 15" fill="none">
                        <path d="M15.1722 15C15.6142 15 16.0381 14.8244 16.3507 14.5118C16.6632 14.1993 16.8388 13.7754 16.8388 13.3333V9.26333C16.8388 8.8213 16.6632 8.39738 16.3507 8.08482C16.0381 7.77226 15.6142 7.59667 15.1722 7.59667H12.8588C12.8588 7.01167 12.8938 6.425 12.9622 5.84C13.0655 5.22 13.2388 4.66833 13.4788 4.18667C13.7205 3.70333 14.0305 3.325 14.4105 3.04833C14.7888 2.73833 15.2705 2.58333 15.8572 2.58333V0C14.8922 0 14.0488 0.206667 13.3238 0.62C12.6051 1.02914 11.9872 1.59409 11.5155 2.27333C11.042 3.02219 10.6931 3.84283 10.4822 4.70333C10.2696 5.65293 10.1656 6.6236 10.1722 7.59667V13.3333C10.1722 13.7754 10.3478 14.1993 10.6603 14.5118C10.9729 14.8244 11.3968 15 11.8388 15H15.1722ZM5.17216 15C5.61419 15 6.03811 14.8244 6.35067 14.5118C6.66324 14.1993 6.83883 13.7754 6.83883 13.3333V9.26333C6.83883 8.8213 6.66324 8.39738 6.35067 8.08482C6.03811 7.77226 5.61419 7.59667 5.17216 7.59667H2.85883C2.85883 7.01167 2.89383 6.425 2.96216 5.84C3.0655 5.22 3.23883 4.66833 3.47883 4.18667C3.7205 3.70333 4.0305 3.325 4.4105 3.04833C4.78883 2.73833 5.2705 2.58333 5.85716 2.58333V0C4.89216 0 4.04883 0.206667 3.32383 0.62C2.60514 1.02914 1.98723 1.59409 1.5155 2.27333C1.04204 3.02219 0.693071 3.84283 0.482164 4.70333C0.269641 5.65293 0.165641 6.6236 0.172164 7.59667V13.3333C0.172164 13.7754 0.347758 14.1993 0.660319 14.5118C0.97288 14.8244 1.3968 15 1.83883 15H5.17216Z" fill="url(#paint0_linear_133_731)" />
                        <defs>
                            <linearGradient id="paint0_linear_133_731" x1="8.50535" y1="0" x2="8.50535" y2="15" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#10B5CB" />
                                <stop offset="1" stop-color="#0073A8" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
                </div>
                <p style={{
                    textAlign: "right"
                }}>Continue Reading</p>
            </div>
        </div>
    )
}

export default function Testimonials() {
    return (
        <div className="container px-8 sm:yypx-16">
            <div className="container-1">
                <h1>Don't take our word for it</h1>
                <p style={{
                    width: "75%",
                    textAlign: "center",
                }}>See what our users have to say about revolutionizing their travel experiences with Travelux.ai</p>
            </div>
            <div className="container-2">
                <div className="row-2">
                    <TestimonialCard/>
                    <TestimonialCard/>
                </div>

                <div className="row-2">
                    <TestimonialCard/>
                    <TestimonialCard/>
                </div>
            </div>
        </div>
    );
}
