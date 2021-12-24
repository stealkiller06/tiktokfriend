import axios from 'axios';
import { API } from '../../config';

export const axiosInstance = axios.create({
    baseURL: API,
    // timeout: 10000,
  });

  export default axiosInstance