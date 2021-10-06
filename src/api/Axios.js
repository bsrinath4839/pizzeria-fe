import axios from 'axios';
import baseURL from './baseURL';

const Axios = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    }
});

export default Axios;