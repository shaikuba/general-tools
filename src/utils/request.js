import axios from 'axios';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.headers.put['Content-Type'] = 'application/json';
axios.defaults.headers.delete['Content-Type'] = 'application/json';

const service = axios.create({
    // process.env.NODE_ENV === 'development' 来判断是否开发环境
    baseURL: process.env.baseURL,
    timeout: 300000,
    headers: {'Content-Type': 'application/json'}
})

service.interceptors.request.use(config => {
    return config;
}, error => {
    console.log(error);
    return Promise.reject();
})

service.interceptors.response.use(response => {
    if (response.status === 200) {
        return response.data;
    } else {
        Promise.reject();
    }
}, error => {
    console.log(error);
    return Promise.reject();
})

export default service;