import axios from 'axios'

// Force production URL for deployment
const baseURL = "https://resume-builder-xw2z.onrender.com"

const api = axios.create({
    baseURL: baseURL
})

export default api