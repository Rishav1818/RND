import axios from "axios";


const api = axios.create({
    baseURL: "http://localhost:1337",
    headers: {
        Authorization: `Bearer ${process.env.API_KEY}`,
    },
});

export const getProjects = async () => api.get("/api/ongoing-projects");