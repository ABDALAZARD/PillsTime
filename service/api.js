import axios from 'axios';

const api = axios.create({
  baseURL:"http://pillstime-api.test/",
})

export default api;