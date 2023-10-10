import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import Trip from '../pages/Trip';
import Meals from '../pages/Meals';
import Hotels from '../pages/Hotels';
import Itinerary from '../pages/Itinerary';

export default function TripRoutes() {
    
    const { id } = useParams();

    return (
        <Routes>
            <Route path='/' element={<Trip />} />
            <Route path='/meals' element={<Meals/>} />
            <Route path='/hotels' element={<Hotels/>} />
            <Route path='/itinerary' element={<Itinerary/>} />
        </Routes>
    )
}
