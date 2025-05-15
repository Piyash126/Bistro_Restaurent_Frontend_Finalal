import axios from 'axios';
import React from 'react';

const axiosPublic = axios.create({
    // baseURL: 'http://localhost:5000'
    baseURL: process.env.VITE_BaseURL_KEY
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;