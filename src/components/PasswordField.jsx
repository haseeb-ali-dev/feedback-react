import { memo } from 'react'
import { TextField } from '@mui/material'

const PasswordField = ({ confirmed = false }) => {
    return (
        <>
            <TextField
                variant='standard'
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
            />
            {confirmed ? (
                <TextField
                    variant='standard'
                    margin='normal'
                    required
                    fullWidth
                    name='password_confirmation'
                    label='Confirmed Password'
                    type='password'
                    id='password_confirmation'
                    autoComplete='current-password'
                />
            ) : null}
        </>
    )
}

export default memo(PasswordField)
