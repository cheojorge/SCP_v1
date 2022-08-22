import React, { useState } from 'react';
import {useLocation, useNavigate } from "react-router-dom";

import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import useAuth from '../hooks/useAuth'

function Copyright(props) {
    
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://ame.gob.ec/" target="_blank">
                LINK
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const theme = createTheme();

export default function Login() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const { login } = useAuth();
    const { state } = useLocation;
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        if(login(userName,password) ){
            navigate(state?.path || '/sistema/app')
        }
        // if(userName !== '' && password !== ''){
        //     login(userName,password).then(()=>{
        //         navigate(state?.path || '/sistema/app')
        //     }).catch(e =>{
        //         alert('Error al autenticar')
        //     })
        // }else{
        //     alert('Los campos Correo y Contraseña son obligatorios')
        // }
    };
    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 10,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            onChange={e => setUserName(e.target.value)}
                            value={userName}
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Usuario"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Contraseña"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Recuerdame"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Ingresar
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    ¿Olvidaste la contraseña?
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}