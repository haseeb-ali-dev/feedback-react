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
            let alert = response?.data?.message || 'Login failed!'
            const errors = response?.data?.errors
            if (errors) {
                Object.keys(errors).forEach((key, index) => {
                    alert += `\n ${index + 1}. ${errors[key][0]}`
                })
            }
            toast.error(alert)  
            return false
        })
}
