import React from 'react';
import background from '../assets/Login/Background.png';
import './Login.css';
import groupIcon from '../assets/Login/GroupIcon.png';
import InputIcon from '@mui/icons-material/Input';
import currentStats from "../assets/Login/currentStats.png";
import { useNavigate }from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div
      className="Login-page"
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        height: '100vh',
      }}
    >
      <div>
        <h1 className="header">
          <img src={groupIcon} alt="groupIcon" style={{ width: '2%' }} />
          Welcome to <br></br> Tasksiry
        </h1>
      </div>
      <img src={currentStats} alt="stats" className='stats'/>
      <div className="login-div">
        <div className="login-inner email">
          <h3>email</h3>
          <input placeholder='test@example.com' />
        </div>
        <div className="login-inner">
          <h3>password</h3>
          <input className="password" placeholder='password' />
        </div>
        <button className="signIn-btn" onClick = {() =>{
         navigate(`/Homepage`)
        }}>
        < InputIcon  style={{
          width:"30%",
          height:"5vh",
          marginTop:"5%",
          backgroundColor:"#1ccc7f"}}/></button>   
      </div>
    </div>
  );
}

export default Login;
