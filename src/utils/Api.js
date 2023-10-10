import axios from "axios";

// export const PublicApi = axios.create({
//     baseURL: "https://tripplanner-server.vercel.app",
// }, { withCredentials: true });

export const PublicApi = axios.create({
    baseURL: "http://localhost:4000",
    withCredentials: true
});