import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:3333'
})

api.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
api.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';

export default api;