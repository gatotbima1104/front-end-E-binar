import axios from 'axios';

export const axiosInstance = axios.create({
    // baseURL: 'https://prisma-gatot-bekend.up.railway.app'
    baseURL : 'http://localhost:5000'
})

