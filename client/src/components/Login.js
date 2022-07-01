import React from 'react'
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    
    <div>
      
      <img className='KKU-img' src={require('./img/KKU.png')} />
         <div className='Green-shadow'></div>
         <div className='White-Rectangle'></div>
         <img className='Small-Logo' src={require('./img/kku-logo.png')} />
         <label className='Username'for="Username:">Username :</label>
         <input className='Username-Input' type="text" id='Username-Input' />
         <label className='Password'for="Password:">Password :</label>
         <input className='Password-Input' type="password" id='Password-Input' />
        <Link to="/"><button className='Login-Button'> Login</button></Link>

        </div>
  )
}
export default Login;

