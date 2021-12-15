import axios from 'axios';

axios.defaults.baseURL = 'https://api-ovni-news.herokuapp.com';

axios.interceptors.request.use(function (config) {
    if(localStorage.getItem('token')) {
        config.headers.Authorization = 'Bearer '+localStorage.getItem('token')
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});