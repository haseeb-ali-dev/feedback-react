import { http } from '../utils/http'
import toast from 'react-hot-toast'

export const fetchCategories = url =>
    http.get(url).then(({ data }) => {
        console.log(data)
        return {
            categories: data?.data,
        }
    })

export const saveCategory = (url, { arg }) => {
    return http
        .post(url, arg)
        .then(res => {
            toast.success(res?.data?.message)
            return true
        })
        .catch(({ response }) => {
            let alert = response?.data?.message || 'Failed to save!'
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
