import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-5948f.firebaseio.com/'
})

export default instance;