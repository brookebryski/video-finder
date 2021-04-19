import axios from 'axios';

const KEY = 'AIzaSyAX-ox0LwcKJIGOA3ParkehC1PZYUsJ56g';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});

