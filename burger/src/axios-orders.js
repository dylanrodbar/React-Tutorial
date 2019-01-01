import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://react-my-burger-da79c.firebaseio.com/'
});

export default instance;