import { Box, List, Button } from '@mui/material'
import useSWR from 'swr'
import { useParams, NavLink } from 'react-router-dom'

import { fetchComments } from '../api/comment'
import { Layout, CommentItem, CommentBox } from '../components'

export default function Comments() {
    const { feedbackId } = useParams()
    const { data, isLoading, mutate } = useSWR(`/comment/${feedbackId}`, fetchComments)

    return (
        <Layout name={'Comments'}>
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
                <Box py={2} textAlign={'end'}>
                    <NavLink to={'/'}>
                        <Button color='primary' variant='text' sx={{ px: { md: 5 } }}>
                            Back to Feebacks
                        </Button>
                    </NavLink>
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
                    {data?.comments?.map((comment, index) => (
                        <CommentItem key={index} row={comment} />
                    ))}
                </List>
                <CommentBox id={feedbackId} mutate={mutate} />
            </Box>
        </Layout>
    )
}
