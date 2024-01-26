import { memo, useState } from 'react'
import { Box, TextField, Button } from '@mui/material'
import useSWRMutation from 'swr/mutation'

import { postComment } from '../api/comment'

const FeedbackForm = ({ id, mutate }) => {
    const { trigger, isMutating } = useSWRMutation('/comment', postComment)

    const handleSubmit = event => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        trigger({ content: data.get('content'), feedback_id: id }).then(created => {
            if (created) {
                event.target.reset()
                mutate()
            }
        })
    }
    return (
        <Box
            bottom={0}
            bgcolor='background.paper'
            p={2}
            width={'100%'}
            sx={{ borderBottomRightRadius: 10, borderBottomLeftRadius: 10 }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    gap: 2,
                }}
                flexWrap={true}
                component={'form'}
                onSubmit={handleSubmit}
                noValidate
            >
                <TextField placeholder='Start commenting here....' multiline fullWidth name='content' />
                <Button type='submit' size='small' variant='outlined' disabled={isMutating}>
                    {isMutating ? 'Posting...' : 'Post'}
                </Button>
            </Box>
        </Box>
    )
}

export default memo(FeedbackForm)
