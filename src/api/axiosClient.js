import axios from "axios";
import queryString from 'query-string';

// Get HTTP request to REST API 
const axiosClient = axios.create({
    baseURL:process.env.REACT_APP_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    paramsSerializer: params => queryString.stringify({...params, api_key: process.env.REACT_APP_API_KEY})
});

/**
 * defind request
 */
axiosClient.interceptors.request.use(async (config) => config);
/**
 * defind response
 */
axiosClient.interceptors.response.use((response) => {
    if(response && response.data){
        return response.data;
    }

    return response;
}, (error) =>{
    throw error;
});

export default axiosClient;