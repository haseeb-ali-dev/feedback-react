import { memo, useState } from 'react'
import { Box, TextField, Button } from '@mui/material'
import useSWRMutation from 'swr/mutation'

import { postFeedback } from '../api/feedback'
import { CategoryDropdown } from '.'

const FeedbackForm = () => {
    const [category, setCategory] = useState('')
    const { trigger, isMutating } = useSWRMutation('/feedback', postFeedback)

    const handleChange = event => setCategory(event.target.value)

    const handleSubmit = event => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        trigger({
            description: data.get('description'),
            title: data.get('title'),
            category_id: category,
        }).then(created => (created ? event.target.reset() : null))
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
                    flexDirection: 'row-reverse',
                    gap: 2,
                }}
                flexWrap={true}
                component={'form'}
                onSubmit={handleSubmit}
                noValidate
            >
                <TextField placeholder='Post Your Review' multiline rows={4} fullWidth name='description' />
                <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <CategoryDropdown category={category} handleChange={handleChange} />
                    <TextField
                        variant='outlined'
                        required
                        id='title'
                        placeholder='Feedback Title'
                        name='title'
                        size='small'
                        autoComplete='title'
                        sx={{ minWidth: { sm: 200, md: 300 }, mt: 1 }}
                    />
                    <Button type='submit' size='small' variant='outlined' sx={{ mt: 1 }} disabled={isMutating}>
                        {isMutating ? 'Posting...' : 'Post'}
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default memo(FeedbackForm)
