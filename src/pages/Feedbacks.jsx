import { Box, List, TextField } from '@mui/material'
import useSWR from 'swr'

import { fetchFeedbacks } from '../api/feedback'
import { Layout, FeedbackItem, FeedbackForm } from '../components'

export default function Feedbacks() {
    const { data, isLoading } = useSWR('/feedback', fetchFeedbacks)

    return (
        <Layout name={'Feedbacks'}>
            <Box
                sx={{
                    backgroundColor: '#ebebeb8c',
                    borderColor: 'grey',
                    height: '85vh',
                    mt: { sm: 0, md: 8 },
                    mr: { sm: 0, md: 4 },
                    p: 3,
                    borderRadius: 4,
                }}
            >
                <List
                    sx={{
                        width: '100%',
                        bgcolor: 'background.paper',
                        overflowY: 'auto',
                        maxHeight: '69vh',
                        '&::-webkit-scrollbar': {
                            width: '0.5em',
                        },
                        '&::-webkit-scrollbar-track': {
                            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
                            webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            backgroundColor: 'rgba(0,0,0,.1)',
                        },
                    }}
                >
                    {isLoading && <p>Loading...</p>}
                    {data?.feedbacks?.map((feedback, index) => (
                        <FeedbackItem key={index} row={feedback} divider={data?.feedbacks?.length - 1 !== index} />
                    ))}
                </List>
                <FeedbackForm />
            </Box>
        </Layout>
    )
}
