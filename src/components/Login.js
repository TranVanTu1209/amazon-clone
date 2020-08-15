import React, { useState } from 'react';
import logo from '../assets/png_logo.png';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';


const Login = () => {

  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const login = e => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .then(auth => {
        // logged in, redirect to home page
        history.push('/');
      })
      .catch(err => alert(err.message));
  }
  const signup = () => {
    auth.createUserWithEmailAndPassword(email, password)
      .then(auth => {
        // signed up, create a user and login and redirect user to homepage
        history.push('/');
      })
      .catch(err => alert(err.message));
  }
  return (
    <div className="login">
      <Link to="/">
        <img src={logo} alt="Amazon Logo" className="login__logo" />
      </Link>
      <div className="login__container">
        <h1>
          Sign In
        </h1>
        <form className="login__form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <button onClick={login} type="submit" className="login__button" >
            Login
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.
        </p>
        <button onClick={signup} className="signup__button" >
          Create your Amazon account
        </button>
      </div>
    </div>
  )
}

export default Login;
