import toast from 'react-hot-toast'
import { http } from '../utils/http'

export const fetchFeedbacks = url =>
    http.get(url).then(({ data }) => {
        console.log(data)
        return {
            feedbacks: data?.result?.data,
            next: data?.result?.next_page_url,
            prev: data?.result?.prev_page_url,
        }
    })

export const postFeedback = (url, { arg }) => {
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
