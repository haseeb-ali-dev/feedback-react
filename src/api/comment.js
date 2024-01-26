import { http } from '../utils/http'
import toast from 'react-hot-toast'

export const fetchComments = url =>
    http.get(url).then(({ data }) => {
        console.log(data)
        return {
            comments: data?.data,
        }
    })

export const postComment = (url, { arg }) => {
    return http
        .post(url, arg)
        .then(res => {
            toast.success(res?.data?.message)
            return true
        })
        .catch(({ response }) => {
            let alert = response?.data?.message || 'Failed to post!'
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
