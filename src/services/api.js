import { useEffect } from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://musikulture-api.herokuapp.com/'
})

export default api;