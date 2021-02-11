import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import {auth, provider} from '../firebase'
import { useDispatch } from 'react-redux'
import { login } from '../redux/userSlice'

function Login() {
    const dispatch = useDispatch()
   const Login = ()=>{
       auth.signInWithPopup(provider)
       .then(({user})=>{
           dispatch(login({
               displayName:user.displayName,
               email:user.email,
               photoUrl:user.photoURL
           }))
       })
   }

    return (
        <div className="login">
            <div className="login__container">
                <img src="https://i0.wp.com/itc.ua/wp-content/uploads/2020/10/newgmaillogo.0.jpg" alt=""/>
                <Button onClick={Login} variant="contained" color="primary">Login</Button>
            </div>
        </div>
    )
}

export default Login
