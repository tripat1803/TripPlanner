import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import Trip from '../pages/Trip';

export default function TripRoutes() {
    
    const { id } = useParams();
    console.log(id);

    return (
        <Routes>
            <Route path='/trip' element={<Trip />} />
        </Routes>
    )
}
