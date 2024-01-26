import { Divider, Box, Button, Link, Container, Typography } from '@mui/material'
import { NavLink, useNavigate } from 'react-router-dom'
import useSWRMutation from 'swr/mutation'

import { EmailField, PasswordField } from '../components'
import { loginUser } from '../api/login'

export default function Login() {
    const redirect = useNavigate()
    const { trigger, isMutating } = useSWRMutation('/login', loginUser)

    const handleSubmit = event => {
        event.preventDefault()
        const data = new FormData(event.currentTarget)
        trigger({
            email: data.get('email'),
            password: data.get('password'),
        }).then(loggedIn => (loggedIn ? window.location.reload() : null))
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
                    <EmailField />
                    <PasswordField />
                    <Button type='submit' fullWidth variant='outlined' sx={{ mt: 3, mb: 2 }} disabled={isMutating}>
                        {isMutating ? 'Logging in.....' : 'Log In'}
                    </Button>
                    <NavLink to={'/sign-up'}>
                        <Link href='#' variant='body2' component='span' sx={{ textAlign: 'center', display: 'block' }}>
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </NavLink>
                </Box>
            </Box>
        </Container>
    )
}
