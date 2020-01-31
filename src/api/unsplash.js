import axios from 'axios';

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 5da4a1b30280f8b9ac9cb1eb2024a0447834e06d8a5afcd0882673004ff03783'
    }
})