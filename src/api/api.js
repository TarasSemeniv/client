
import axios from 'axios';

const Api = axios.create({
  baseURL: 'http://localhost:5000', // Your backend API base URL
});

export default Api;
