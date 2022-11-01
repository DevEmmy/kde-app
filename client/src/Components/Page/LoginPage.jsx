import React from 'react'
import S from './images/S.jpg'
import { Container } from './LoginPage.Style'
import { Page } from './LoginPage.Style'
import { Link } from 'react-router-dom'
import { useRef } from 'react'
import services from '../../ioc/services';


const LoginPage = () => {

  const emailRef = useRef();
  const passwordRef = useRef();

  const login = async (e) => {
    e.preventDefault()
    const userDetail = {
      email: emailRef.current.value,
      password: passwordRef.current.value
    }

    await services.api.userRequests.login(userDetail).then(res => {
      console.log(res);
    }).catch(err => console.log(err));
  }
  return (
    <Container>
      <Page>
        <h1>King David Elite</h1>
        <p className='back'>welcome back</p>
        <form onSubmit={(e) => login(e)}>
          <p className='mail'>Email</p>
          <input type='email' ref={emailRef} placeholder='Enter your email here' />
          <p className='password'>Password</p>
          <input type='password' ref={passwordRef} />
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