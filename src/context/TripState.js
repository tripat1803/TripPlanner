import React, { createContext, useState } from 'react';

export const TripContext = createContext();
export default function TripState({children}) {

    const [data, setData] = useState([
        {
            search: "",
            goingDate: "",
            returnDate: "",
            numberOfPeople: {
                adults: 1,
                children: 0
            },
            selectedSights: [],
            budgetLeve: 0,
            mealsToInclude: {
                breakfast: false,
                lunch: false,
                dinner: false
            },
            stayAddress: "",
            itinerary: {
                
            }
        }
    ]);

    const updateData = () => {
        localStorage.setItem('userData', JSON.stringify(data));
    }

    const clearData = () => {
        localStorage.removeItem('userData');
    }

    return (
        <TripContext.Provider value={{data, setData, updateData, clearData}}>
            {children}
        </TripContext.Provider>
    );
}
