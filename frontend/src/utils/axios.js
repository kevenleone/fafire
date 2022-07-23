import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

console.log({ API_URL })

// http://localhost:3004
// https://professor-allocation.herokuapp.com

const baseAxios = axios.create({
    baseURL: API_URL,
});

export default baseAxios;