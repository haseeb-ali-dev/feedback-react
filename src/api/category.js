import { http } from '../utils/http'

export const fetchCategories = url =>
    http.get(url).then(({ data }) => {
        console.log(data)
        return {
            categories: data?.data,
        }
    })
