import React from 'react';
import "../../styles/features.css";

function FeaturesCard({ icon, heading, body }) {
    return (
        <div className="layout">
            <div className="icon">{icon}</div>
            <div className="feature">
                <h4>{heading}</h4>
                <p>{body}</p>
            </div>
        </div>
    )
}

export default function Features() {
    return (
        <div className='flex justify-center'>
            <div className="container">
                <div className="container-1">
                    <h6>TRAVELUX.AI</h6>
                    <h3>The only tool you'll ever need!</h3>
                    <p>Say goodbye to the stress of planning and hello to personalized recommendations, efficient itineraries, and seamless dining experiences.</p>
                </div>

                <div className="container-3">
                    <div className="row">
                        <FeaturesCard icon="🗺️" heading="Optimal Route Planning" body="Our AI algorithms analyze your preferences to craft the most efficient route, saving you time and effort." />
                        <FeaturesCard icon="🧑‍💻" heading="Personalize Your Adventure" body="Shape your journey by freely adding, editing, or deleting activities from your itinerary." />
                    </div>

                    <div className="row">
                        <FeaturesCard icon="📲" heading="Travel Reel Insights" body="Utilize social media's potential by gathering travel insights from Instagram reels and integrate them into your itinerary." />
                        <FeaturesCard icon="🦐" heading="Local Cuisine Recommendations" body="Discover local cuisines and hidden gems recommended by our AI, tailored to your taste buds." />

                    </div>
                </div>
            </div>
        </div>
    )
}
