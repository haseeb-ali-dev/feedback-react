import { Box, ButtonGroup, List, Button } from '@mui/material'
import useSWR from 'swr'

import { fetchFeedbacks } from '../api/feedback'
import { Layout, FeedbackItem, FeedbackForm, Switcher } from '../components'
import { useState } from 'react'

export default function Feedbacks() {
    const [page, setPage] = useState(1)
    const { data, isLoading, mutate } = useSWR(`/feedback?page=${page}`, fetchFeedbacks)

    return (
        <Layout name={'Feedbacks'}>
            <Box
                sx={{
                    backgroundColor: '#ebebeb8c',
                    borderColor: 'grey',
                    height: '85vh',
                    mt: { sm: 0, md: 2 },
                    mr: { sm: 0, md: 4 },
                    px: 2,
                    borderRadius: 4,
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexDirection: { xs: 'column', sm: 'column', md: 'row' },
                    }}
                >
                    <Switcher />
                    <ButtonGroup variant='outlined' aria-label='outlined button group'>
                        <Button disabled={!data?.next} onClick={() => setPage(page + 1)}>
                            Next
                        </Button>
                        <Button disabled={!data?.prev} onClick={() => setPage(page + 1)}>
                            Previous
                        </Button>
                    </ButtonGroup>
                </Box>
                <List
                    sx={{
                        width: '100%',
                        bgcolor: 'background.paper',
                        overflowY: 'auto',
                        maxHeight: '64vh',
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
                <FeedbackForm mutate={mutate} />
            </Box>
        </Layout>
    )
}
