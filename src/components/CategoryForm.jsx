import { memo } from 'react'
import { Box, TextField, Button } from '@mui/material'
import useSWRMutation from 'swr/mutation'

import { saveCategory } from '../api/category'

const CategoryForm = () => {
    const { trigger, isMutating } = useSWRMutation('/category', saveCategory)

    const handleSubmit = event => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        trigger({ title: data.get('title') }).then(created => (created ? event.target.reset() : null))
    }
    return (
        <Box bgcolor='background.paper' mt={4}>
            <Box
                sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 2 }}
                component='form'
                onSubmit={handleSubmit}
            >
                <TextField
                    variant='outlined'
                    required
                    id='title'
                    label='Category Title'
                    name='title'
                    size='small'
                    autoComplete='title'
                    sx={{ maxWidth: { sm: 200, md: 300 } }}
                />
                <Button type='submit' variant='outlined' disabled={isMutating}>
                    {isMutating ? 'Saving...' : 'Save'}
                </Button>
            </Box>
        </Box>
    )
}

export default memo(CategoryForm)
