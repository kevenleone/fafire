import axios from 'axios'

const baseAxios = axios.create({
    baseURL: 'https://professor-allocation.herokuapp.com',
});

export default baseAxios;