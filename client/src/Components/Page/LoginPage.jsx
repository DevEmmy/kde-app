import React from 'react'
import { Container, Page } from './SignupPage.style'
import { Link, useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import services from '../../ioc/services';
import globalApi from '../../api';
import axios from 'axios';

const LoginPage = () => {

  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault()
    const userDetails = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    }

    await axios.post(`${globalApi}/users/sign-in`, userDetails)
    .then(resp => {
      let res=resp.data;
      let token = res.token;
      let user = res.user;
      localStorage.setItem("token", token)
      localStorage.setItem("user", JSON.stringify(user))
      console.log(res.message)
      navigate("/")
    })
    .catch(err => console.log(err))
  }
  
  return (
    <Container>
      <Page>
        <h1>King David Elite</h1>
        <p className='back'>welcome back</p>
        <form onSubmit={(e) => login(e)}>
          <input type='email' ref={emailRef} placeholder='Enter your email here' />
          <input type='password' ref={passwordRef} placeholder="Password"/>
        </form>
        <p className='forgot'>Forgot password? <span className='red'>Click here</span></p>

        <button className='login' onClick={login}>login</button>
        <p className='or'>- OR -</p>
        <button className='google' >log in with Google</button>
        <p className='account'>Don't have an account? <Link to="/signup"><span>Sign up</span></Link></p>
      </Page>
    </Container>
  )
}

export default LoginPage