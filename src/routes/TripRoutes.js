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

    useLayoutEffect(() => {
        if (trip.data && trip.data.length >= id) {
            if (Places.filter((data) => {
                return String(trip.data[id - 1]['search']).toLowerCase().includes(String(data.city).toLowerCase());
            }).length !== 0) {
                setTripData(Places.filter((data) => {
                    return String(trip.data[id - 1]['search']).toLowerCase().includes(String(data.city).toLowerCase());
                })[0]);
            }
        }
    }, [trip.data, id]);

    return (
        <Routes>
            <Route path='/' element={<Trip indexId={Number(id)} tripData={tripData} />} />
            <Route path='/meals' element={<Meals indexId={Number(id)} tripData={tripData} />} />
            <Route path='/hotels' element={<Hotels indexId={Number(id)} tripData={tripData} />} />
            <Route path='/itinerary' element={<Itinerary indexId={Number(id)} tripData={tripData} />} />
        </Routes>
    )
}
