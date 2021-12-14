import axios from 'axios';

axios.defaults.baseURL = 'https://127.0.0.1:8000';

axios.interceptors.request.use(function (config) {
    if(localStorage.getItem('token')) {
        config.headers.Authorization = 'Bearer '+localStorage.getItem('token')
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});