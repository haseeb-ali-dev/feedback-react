import axios from 'axios'

import { getAccessToken } from './helpers'

const token = getAccessToken()
const baseURL = import.meta.env.VITE_LOCAL_BASE_API_URL

const http = axios.create({
    baseURL,
    headers: { Accept: 'application/json' },
})

http.interceptors.request.use(request => {
    if (token !== null) {
        request.headers.Authorization = `Bearer ${token}`
    }
    return request
})

export { http }
