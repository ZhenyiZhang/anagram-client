import Axios from 'axios';
import serverAddress from '../constants/serverAddress';

const postAnagram = Axios.create({
    baseURL: serverAddress + '/api/anagrams',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type' : 'application/json'
    }
});

export default postAnagram;