import { memo } from 'react'
import { TextField } from '@mui/material'

const EmailField = ({ focus = true }) => {
    return (
        <TextField
            variant='standard'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus={focus}
        />
    )
}

export default memo(EmailField)
