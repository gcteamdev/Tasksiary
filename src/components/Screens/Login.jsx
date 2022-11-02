import React from 'react';
import "./Login.css";
import Logo from "../assets/Login/workarise_icon-black background.png";
import Settings from "../assets/Login/Settings.png";
import TasksSnap from "../assets/Login/Group 255.png";
import envelope from "../assets/Login/email-icon.png";
import password from "../assets/Login/password-icon.png";
import dots from "../assets/Login/dots.png";
import SignGmail from "../assets/Login/sign in-google.png";
import SignMsoft from "../assets/Login/sign in-microsoft.png";
import companyLogo from "../assets/Login/Company Logo.png"
//import {NavLink, Routes, Route } from 'react-router-dom';
import Auth from '../Auth';

function Login() {
   /* const navigate = useNavigate();
  const navigateHome = () => {
    navigate('/auth');
  }; */ 
  return (
<section className="gradient-form">
 
    <div className="row d-flex justify-content-center align-items-center">
        <div className=" text-black">
          <div className="row g-0">
            <div className="col-lg-6">
            <div>  
                   <div className="d-flex justify-content-between mb-5">
                    <div className="d-flex logobar">
                     <img className="logo" src={Logo} alt="logo" />
                      <h4 className="mt-3 font-weight-bolder">workarise</h4>
                    </div>
                   
                     <img className="p-4" src={Settings} alt="settings" /> 
                   </div>
                  </div>
              <div className=" p-md-5 mx-md-4">

       {/* <form action="" method="post" className="col-6 text-center m-auto"> */}
       <form  className="col-6 text-center m-auto ">
           <div className="d-flex justify-content-between">
            <img className="company-logo " src={companyLogo} alt="companyLogo" />

            <div className="mt-4">
               <h3 className="text-center">Welcome back, José</h3>
               <h6 className="LoginOrNew">please sign in or <span className="createNew">create a new account</span></h6>
            </div>
           </div>
              
           <div className="form-group mb-3">
           	<div className="input-group">
                   <level>Email Address</level>
                   <div className="d-flex input-group border rounded col-6">
                      <img className="p-2" src={envelope} alt="envelope" />
                      <input type="text" className="form-control" />               
                   </div>
                   
               </div>
           </div>
	   	<div className="form-group mb-2">
               <div className="input-group">
                  <level>Password</level>
                  <div className="d-flex input-group border rounded col-6">
                      <img className="p-2" src={password} alt="password" />
                      <input type="text" className="form-control" />               
                   </div>
                </div>
           </div>    
           <div className="d-flex justify-content-between rememberMe mb-3">
               <label className="float-left form-check-label"><input type="checkbox"/> Remember me</label>
               {/* <a href="#" className="float-right text-dark">Forgot Password?</a> */}
               <p className="float-right text-dark">Forgot Password?</p>
           </div>     
           <div className="form-group">        
              
          <button className="btn btn-dark col-12 btn-block" >
            Log in
           </button> 
           
           
           
         {/*  <Routes>
           <Route path="/auth" element={<Auth />} />
          
         </Routes>  */} 
         </div>  
           <div className="d-flex mt-1 text-muted">
             <span>___________</span>
             <h6 className="rememberMe mt-3 m-2"> Sign in with Gmail or Microsoft </h6>
             <span>____________</span>
           </div>
           <div className="d-flex justify-content-between mb-5">
             <img className="Gmail-Msoft" src={SignGmail} alt="signIn with Gmail"/>
             <img className="Gmail-Msoft" src={SignMsoft} alt="signIn with Microsoft"/>
           </div>
                  
       </form>

                 </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center gradient-custom-2 bg-primary">
              <div className="text-dark px-3 py-4 p-md-5 mx-md-4 d-column ">
                <div className="col-12  text-center">
                  <img src={TasksSnap} alt="group-tasks-snapshot" className="tasksSnap" />
                </div>    
                <h4 className="mb-4 text-center">Daily Tasks</h4>
                <p className="small text-center">Check your daily tasks to see what you and your team need to complete for the week and day. Take full control of the task management by uploading tasks when received. </p>
                <div className="col-12 text-center mt-3">
                  <img src={dots} alt="nav scrolls" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</section>

  )
}

export default Login