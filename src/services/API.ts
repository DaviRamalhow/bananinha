import axios from "axios";


const api = axios.create({
    baseURL: "http://server.andrewcaires.me:3050/api/auth/",
});


export default api;