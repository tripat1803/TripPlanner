import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';
import Trip from '../pages/Trip';

export default function TripRoutes() {
    
    const { id } = useParams();

    return (
        <Routes>
            <Route path='/' element={<Trip />} />
        </Routes>
    )
}
