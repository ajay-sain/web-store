import axios from "axios";

axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export const instance = axios.create({
    timeout: 5000,
    headers: {'X-Custom-Header': 'foobar'}
});