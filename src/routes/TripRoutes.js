import React, { useContext, useLayoutEffect, useState } from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import Trip from '../pages/Trip';
import Meals from '../pages/Meals';
import Hotels from '../pages/Hotels';
import Itinerary from '../pages/Itinerary';
import { TripContext } from '../context/TripState';
import { Places } from '../utils/Places';

export default function TripRoutes() {
    
    let trip = useContext(TripContext);
    const { id } = useParams();
    const [tripData, setTripData] = useState(null);
    const [userTripDetails, setUserTripDetails] = useState({});

    useLayoutEffect(() => {
        if (trip.data && trip.data.filter((item) => item.id === id).length !== 0) {
            setUserTripDetails(trip.data.filter((item) => item.id === id)[0]);
            if (Places.filter((data) => {
                return String(trip.data.filter((item) => item.id === id)[0]['search']).toLowerCase().includes(String(data.city).toLowerCase());
            }).length !== 0) {
                setTripData(Places.filter((data) => {
                    return String(trip.data.filter((item) => item.id === id)[0]['search']).toLowerCase().includes(String(data.city).toLowerCase());
                })[0]);
            }
        }
    }, [trip.data, id]);

    return (
        <Routes>
            <Route path='/' element={<Trip indexId={id} tripData={tripData} />} />
            <Route path='/meals' element={<Meals indexId={id} tripData={tripData} userTripDetails={userTripDetails} />} />
            <Route path='/hotels' element={<Hotels indexId={id} tripData={tripData} userTripDetails={userTripDetails} />} />
            <Route path='/itinerary' element={<Itinerary indexId={id} tripData={tripData} userTripDetails={userTripDetails} />} />
        </Routes>
    )
}
