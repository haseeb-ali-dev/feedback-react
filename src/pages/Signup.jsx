import { Divider, Box, Button, Link, TextField, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'

export default function SignUp() {
    const handleSubmit = event => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        })
    }

    return (
        <Box
            sx={{
                marginTop: 10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: '1px solid lightgray',
                padding: '20px',
            }}
        >
            <Typography component='h1' variant='h5' color={'primary'}>
                Feedback App
            </Typography>
            <Divider variant='fullWidth' />
            <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                    variant='standard'
                    margin='normal'
                    required
                    fullWidth
                    id='name'
                    label='Your Name'
                    name='name'
                    autoFocus
                />
                <TextField
                    variant='standard'
                    margin='normal'
                    required
                    fullWidth
                    id='email'
                    label='Email Address'
                    name='email'
                    autoComplete='email'
                />
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
                <Button type='submit' fullWidth variant='outlined' sx={{ mt: 3, mb: 2 }}>
                    Sign Up
                </Button>
                <NavLink to={'/log-in'}>
                    <Link href='#' component='span' variant='body2' sx={{ textAlign: 'center', display: 'block' }}>
                        {'Already have an account? Log In'}
                    </Link>
                </NavLink>
            </Box>
        </Box>
    )
}
