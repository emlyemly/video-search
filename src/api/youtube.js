import axios from 'axios'

const KEY = 'AIzaSyCsAC3m3pXNpUMe4HjoBKbfv8Tmx49l4JI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});