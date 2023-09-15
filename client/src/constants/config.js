// common sent
//API_NOTOFICATION_MESSAGES
export const  API_NOTOFICATION_MESSAGES = {
     loding: {
        title: 'Loading...',
        message: 'Data is beign loaded, Please wait'
     },
     success:{
        title: 'Success',
        message: 'Data successfully loaded'
     }, 
     responseFailure:{
        title: 'Error',
        message :'An error occured while fetching respomse from the server. Please try again '
     },
     responseFailure:{
        tittle: 'Error',
        message: 'An error occured while parsing request data'
     },
     networkError:{
        title: 'Error',
        message: 'Unable to connect with the server . Please check internet connectivity and try again later'
     }


}

//API SERVICE all(all api in one)
export const SERVICE_URLS = {
   userSignup: {url:'/signup',method: 'POST'}// end point
}