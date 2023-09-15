import axios from 'axios';
import { API_NOTOFICATION_MESSAGES,SERVICE_URLS } from '../constants/config';
const API_URL = "https://localhost:8000";

const axiosInstace = axios.create({
    baseURL: API_URL,
    timeout: 10000,    // bec ml, delay in api call
    headers:{
        "Content-Type" : "application/json"
    }
})

axiosInstace.interceptors.request.use(
    function(config){
        return config;
    },
    function (error){
        return Promise.reject(error);
    }
)

axiosInstace.interceptors.response.use(
    function (response){
        // stop global loader
        return processResponse(response);
    },
    function(error){
        // stop global loader
         return Promise.reject(processError(error));
    }

)

const processResponse= (response) => {
      if(response?.status === 200){
         return{ isSucess: true, data: response.data}
      } else {
        return{
        isFailure: true,
        status:response?.status,
        msg:response?.msg,
        code : response?.code
        }
      }
}

const processError = (error) =>{
     if(error.response){
        // Request made and server responded with a status other
        // that falls out of the range 2.x.x
        console.log('ERROR IN RESPONSE: ',error.toJSON());
        return{
            isError: true,
            msg: API_NOTOFICATION_MESSAGES.responseFailure,
            code: error.response.status
        }
     }else if(error.request){
        // Request made but no response was received
        console.log('ERROR IN REQUEST: ',error.toJSON());
        return{
            isError: true,
            msg: API_NOTOFICATION_MESSAGES.requestFailure,
            code:""
        }
     }else{
        // something happened in setting up  request that trigger an error
        console.log('ERROR IN RESPONSE: ',error.toJSON());
        return{
            isError: true,
            msg: API_NOTOFICATION_MESSAGES.networkError,
            code: ""
        }
    }
}
const API= {};

for (const [key,value] of Object.entries(SERVICE_URLS)){
    API[key] = (body,showUploadProgress, showDownloadProgress) => 
        axiosInstace({                                                      // multiple request to same API
            method:value.method,
            url: value.url,     
            data: body,
            responseType: value.responseType,
            onUploadProgress: function(progressEvent){
                if (showUploadProgress){
                    let percentageCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
                    showUploadProgress(percentageCompleted);
                }
            },
            onDownloadProgress: function(progressEvent){
                if (showDownloadProgress){
                    let percentageCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
                    showDownloadProgress(percentageCompleted);
                }
            }                              
        })
    }
export {API};