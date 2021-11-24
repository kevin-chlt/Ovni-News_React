import axios from 'axios';



axios.interceptors.request.use(function (config) {
    config.headers.authorization = 'bearer '
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

