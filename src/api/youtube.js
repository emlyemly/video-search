import axios from 'axios'

const KEY = 'AIzaSyCsAC3m3pXNpUMe4HjoBKbfv8Tmx49l4JI';

const commentsAPI = (videoId) => axios.create({
        baseURL: 'https://www.googleapis.com/youtube/v3/commentThreads',
        params: {
            key: KEY,
            part: 'snippet',
            maxResults: 10,
            textFormat: 'plainText',
            videoId: videoId
        }
});

const searchAPI = axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});

export { commentsAPI, searchAPI }