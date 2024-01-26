import { Divider, Box, Button, Link, TextField, Container, Typography } from '@mui/material'
import { NavLink, useNavigate } from 'react-router-dom'
import useSWRMutation from 'swr/mutation'

import { EmailField, PasswordField } from '../components'
import { signUpUser } from '../api/signup'

export default function SignUp() {
    const redirect = useNavigate()
    const { trigger, isMutating } = useSWRMutation('/register', signUpUser)

    const handleSubmit = event => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        trigger({
            name: data.get('name'),
            email: data.get('email'),
            password: data.get('password'),
            password_confirmation: data.get('password_confirmation'),
        }).then(signedUp => (signedUp ? window.location.reload() : null))
    }

    return (
        <Container component='main' maxWidth='xs'>
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
                    <EmailField focus={false} />
                    <PasswordField confirmed={true} />
                    <Button type='submit' fullWidth variant='outlined' sx={{ mt: 3, mb: 2 }} disabled={isMutating}>
                        {isMutating ? 'Signing up.....' : 'Sign Up'}
                    </Button>
                    <NavLink to={'/log-in'}>
                        <Link href='#' component='span' variant='body2' sx={{ textAlign: 'center', display: 'block' }}>
                            {'Already have an account? Log In'}
                        </Link>
                    </NavLink>
                </Box>
            </Box>
        </Container>
    )
}
