import React, { createContext, useContext, useState } from 'react'
import users from '../const/users'
// import axios from 'axios'
// import jwt_decode from "jwt-decode";
// import urlApiRest from '../const/UrlApiRest'
const AuthContext = createContext();

function useAuth () {
    const [authed, setAuthed] = useState(false);
    const [userNameAuth, setUserNameAuth] = useState('')

    const login = (userName, password) =>{

        if(users.filter(item => item.emal === userName).length !== 0){
            setUserNameAuth(users.filter(item => item.emal === userName))
            setAuthed(true)
            return true
        }
        
        alert('Usuario incorrecto')
        return false
        
        
        
        // return axios.post(`${urlApiRest}login`,{
        //     mail_usuario: userName+'@ame.gob.ec',
        //     password_usuario: password
        // }).then(res => {
        //     setUserNameAuth(jwt_decode(res.data))
        //     setAuthed(true)
        // }).catch(e => {
        //     alert('Error al autenticar')
        // })
    }
    const logout = () =>{
        setAuthed(false)
        setUserNameAuth('')
    }
    return {
        authed,
        login,
        logout,
        userNameAuth,
    }
}

export function AuthProvider({children}){
    const auth = useAuth();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export default function AuthConsumer(){
    return useContext(AuthContext)
}