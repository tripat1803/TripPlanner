import React, { createContext, useEffect, useState } from 'react';
import { PublicApi } from '../utils/Api';
import { useLocation, useNavigate } from 'react-router-dom';

export const UserContext = createContext();

export default function UserState({ children }) {

    let location = useLocation();
    let navigate = useNavigate();
    const [data, setData] = useState(null);
    const [loader, setLoader] = useState(true);

    const fetchUserDetails = async () => {
        setLoader(true);
        PublicApi.get("/api/v1/users").then((res) => {
            setData(res.data);
            navigate('/');
            setLoader(false);
        }).catch((err) => {
            console.log(err);
            setLoader(false);
        });
    }
    const fetchUserDetailsWithoutLoader = async () => {
        PublicApi.get("/api/v1/users").then((res) => {
            setData(res.data);
        }).catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
        fetchUserDetails();
    }, []);

    useEffect(() => {
        if(location.pathname.includes('/trip') && !data && !loader){
            // navigate("/");
        }
        if (location.pathname === '/auth' && data && !loader) {
            navigate('/');
        }
    }, [location.pathname, loader]);

    if(loader){

    }

    return (
        <UserContext.Provider value={{ data, fetchUserDetailsWithoutLoader }}>
            {children}
        </UserContext.Provider>
    );
}
