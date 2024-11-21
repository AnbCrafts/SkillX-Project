import React, { useContext, useEffect, useState } from 'react';
import './LoginPage.css'; 
import { LoginContext } from '../../ContextAPI/loginContextAPI';
const LoginPage = () => {
  const { 
    fullname, setFullname,
    username, setUsername,
    phone, setPhone,
    email, setEmail,
    password, setPassword,
    confirmPass, setConfirmPass,
    btnText,formHandler,
    loginPara,loginSpan,switchLogin,setLogin,login
    
  } = useContext(LoginContext); // Use the context here

  useEffect(()=>{
    switchLogin();

  },[login])


 
 

  return (
    <div className="form">
      <div className="loginTopText">
        <h1>Connect with Us</h1>
        <p id="headingPara">Register here to become a member of Beyond Blue</p>
      </div>
      <div className="formMain">
        <div className="formFill">
          <form onSubmit={formHandler}>

            {login?<>
              <div className="input username">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter Username"
                name="username"
                />
            </div>
            <div className="input password">
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                name="password"
                />
            </div>
            
            
            </> :<>

            <div className="input name">
              <input
                type="text"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                name="fullname"
                placeholder="Your Full Name"
                />
            </div>
            <div className="input username">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Create Username"
                name="username"
                />
            </div>
            <div className="input phone">
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter Mobile No."
                name="phone"
                />
            </div>
            <div className="input email">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                name="email"
                />
            </div>
            <div className="input password">
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create Password"
                name="password"
                />
            </div>
            <div className="input password-confirm">
              <input
                type="password"
                value={confirmPass}
                onChange={(e) => setConfirmPass(e.target.value)}
                placeholder="Confirm Password"
                />
            </div>
           
            
            
            </>}

            
            <button type="submit">
              {btnText}
            </button>
          </form>
          <div className="loginOption">
            <p id="loginPara">
              {loginPara}
              <span id="login" onClick={()=>setLogin(!login)}>{loginSpan}</span>
            </p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default LoginPage;
