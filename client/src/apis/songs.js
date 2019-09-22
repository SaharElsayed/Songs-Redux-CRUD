import axios from 'axios';

const songs = axios.create({
    baseURL: 'http://localhost:3001'
});

const isHandlerEnabled = (config = {}) => {
    return config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled ?
        false : true
}

const requestHandler = (request) => {
    if (isHandlerEnabled(request)) {
        // Modify request here
        //   request.headers['X-CodePen'] = 'https://codepen.io/teroauralinna/full/vPvKWe'
        console.log(request);

    }
    return request
}

const errorHandler = (error) => {
    console.log(error);

    if (isHandlerEnabled(error.config)) {
        // Handle errors
    }
    return Promise.reject({ ...error })
}

const successHandler = (response) => {
    console.log(response);

    if (isHandlerEnabled(response.config)) {
        // Handle responses
        console.log(response);

    }
    return response
}

songs.interceptors.request.use(
    request => requestHandler(request)
);

songs.interceptors.response.use(
    response => successHandler(response),
    error => errorHandler(error)
)

export default songs;