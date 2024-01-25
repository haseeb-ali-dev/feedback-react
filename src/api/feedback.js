import { http } from '../utils/http'

export const fetchFeedbacks = url =>
    http.get(url).then(({ data }) => {
        console.log(data)
        return {
            feedbacks: data?.result?.data,
            next: data?.result?.next_page_url,
            prev: data?.result?.previous_page_url,
        }
    })
