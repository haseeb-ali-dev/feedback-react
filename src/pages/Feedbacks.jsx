import { Box, List } from '@mui/material'
import useSWR from 'swr'

import { fetchFeedbacks } from '../api/feedback'
import { Layout, FeedbackItem } from '../components'

export default function Feedbacks() {
    const { data, isLoading } = useSWR('/feedback', fetchFeedbacks)

    return (
        <Layout name={'Feedbacks'}>
            <Box
                sx={{
                    backgroundColor: '#ebebeb8c',
                    borderColor: 'grey',
                    height: '90vh',
                    mt: { sm: 0, md: 8 },
                    mr: { sm: 0, md: 4 },
                    p: 3,
                    borderRadius: 4,
                }}
            >
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    {isLoading && <p>Loading...</p>}
                    {data?.feedbacks?.map((feedback, index) => (
                        <FeedbackItem key={index} row={feedback} divider={data?.feedbacks?.length - 1 !== index} />
                    ))}
                </List>
            </Box>
        </Layout>
    )
}
