import API from "./API";
import axios from "axios";

export default {    
    makeRequest: params => axios.get("/", { params }),
    createPost: item => axios.post("/login", item),
};