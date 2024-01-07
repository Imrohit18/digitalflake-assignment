import React, { useEffect, useState } from 'react';
import axios from 'axios';
import crypto from "crypto";
import HomePage from './HomePage';
import Header from '../components/Header'

const LoginPage = () => {

  const [email, setEmail] = useState("rohit@gmail.com");
  const [password, setPassword] = useState('rohit');
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:9001/users");
    setUsers(response.data)
  }

  useEffect(() => {
    getUsers();
  }, [])


  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [shaHash, setShaHash] = useState("");


  const generateHash = (string) => {
    const hash = crypto.createHash('sha256').update(string).digest("hex");
    setShaHash(hash);
    console.log(hash);
  }

  const handleSubmit = (e) => {

    e.preventDefault();

    generateHash(password);

    let emailAuth = (users[0].email === email);
    let passwordAuth = (users[0].password === shaHash);
    if (emailAuth && passwordAuth) {
      console.log("authenticated");
      setIsLoggedIn(true);
    }
  }

  console.log(isLoggedIn);


  return (

    !isLoggedIn ?
      (<div className="layout-container" >
      <main className='login-container'>
        <form className='login-form' onSubmit={handleSubmit} action="" style={{ width: '400px', height: '500px', top: '50px', left: '46px', borderRadius: '5px', position: 'absolute', border: '0px solid #000', boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)'  }}>
          <img className='login-form-logo' src="https://digitalflake.com/wp-content/uploads/2023/04/DF_logo-transparent2.png" alt="" />
          <p>Welcome to DigitalFlake Admin</p>
          <div className="form-group">
            <label htmlFor="">Email ID</label>
            <input required value={email} onChange={(e) => { setEmail(e.target.value) }} type="text" name='' />
          </div>
    
          <div className="form-group">
            <label htmlFor="">Password</label>
            <input required value={password} onChange={(e) => { setPassword(e.target.value) }} type="password" name="" />
          </div>
    
          <div className="forgot-password" style={{ fontSize: 'small', textAlign: 'right', padding: '0px 0px 0px 150px' }}>
            <a href='/forget'>Forgot Password?</a>
          </div>
    
          <button className='purple-btn login-btn'>Login</button>
        </form>
        <img className='login-illustration' src="https://assets-global.website-files.com/6410ebf8e483b5bb2c86eb27/6410ebf8e483b504d186fc4a_ABM%2520College%2520Software%2520developer%2520main-p-2000.jpg" alt="" srcSet="" />
      </main>
    </div>
    )
      :
      (
        <main>
          <Header />
          <HomePage />
        </main>

      )
  )
}

export default LoginPage