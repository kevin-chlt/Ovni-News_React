import axios from 'axios';


axios.interceptors.request.use(function (config) {
    if(localStorage.getItem('token')) {
        config.headers.Authorization = 'bearer '+localStorage.getItem('token')
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

