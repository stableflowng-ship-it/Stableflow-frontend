// 


import axios from 'axios';
import { envHelper } from '../config/env.helper';
// import Cookies from 'js-cookie';
// import { envHelper } from './proccess.env'


const baseURL = envHelper.url.base_url

const odAxios = axios.create({
  baseURL: baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
});

odAxios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (typeof window !== 'undefined' && error?.response?.status === 401) {
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

export default odAxios;
