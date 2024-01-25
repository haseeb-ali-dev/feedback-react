import toast from 'react-hot-toast'

import { http } from '../utils/http'
import { saveAccessToken } from '../utils/helpers'

export const loginUser = (url, { arg }) => {
    const { email, password } = arg
    return http
        .post(url, { email, password })
        .then(res => {
            if (!res?.data?.access_token) {
                toast.error('No token found. Please login again.')
                return false
            }
            saveAccessToken(res?.data?.access_token)
            toast.success(res?.data?.message)
            return true
        })
        .catch(({ response }) => {
            toast.error(response?.data?.message || 'Login failed!')
            return false
        })
}
