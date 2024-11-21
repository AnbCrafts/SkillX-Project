import React, { createContext, useState } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';

export const LoginContext = createContext();

const LoginContextProvider = (props) => {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [btnText, setBtnText] = useState("Register Me");
  const [login, setLogin] = useState(false);
  const [loginPara,setLoginPara] = useState("Already have an account??")
  const [loginSpan,setLoginSpan] = useState("Login to your account")

  const formHandler = async (event) => {
    event.preventDefault();
    const url = 'http://localhost:5500';

    // Basic form validation
    if (btnText === "Register Me") {
      if (!fullname || !username || !phone || !email || !password || !confirmPass) {
       return toast.error("All fields must be filled...");
         
      }

      if (password !== confirmPass) {
       return  toast.error("Passwords do not match...");
        
      }
    } else if (btnText === "Login") {
      if (!username || !password) {
       return toast.error("Username and Password are required...");
        
      }
    }

    try {
      const endpoint = btnText === "Register Me" ? `${url}/api/v1/user/register` : `${url}/api/v1/user/login`;
      const payload = btnText === "Register Me" 
        ? { fullname, username, email, password, phone }
        : { username, password };

      const response = await axios.post(endpoint, payload);

      if (response.data.success) {
        setFullname("");
        setUsername("");
        setPassword("")
        setConfirmPass("")
        setEmail("")
        setPhone("");
        if (btnText === "Register Me") {
          setBtnText("Login");  // Automatically switch to Login after successful registration
        }
       return toast.success(response.data.message);
      } else {
       return toast.error(response.data.message || "An error occurred...");
      }
    } catch (error) {
      console.error(error);
      return toast.error("An error occurred. Please try again.");
    }
  };


  const switchLogin = ()=>{
    
    if(login){
        setBtnText("Login");
        setLoginSpan("Create a new Account");
        setLoginPara("New on Beyond Blue??");
    }
    else{
        setBtnText("Register Me");
        setLoginSpan("Login to your account");
        setLoginPara("Already have an account??");

    }

  }


  

  const contextValue = {
    fullname, setFullname,
    username, setUsername,
    phone, setPhone,
    email, setEmail,
    password, setPassword,
    confirmPass, setConfirmPass,
    btnText, setBtnText,
    formHandler, login, setLogin,loginPara,loginSpan,switchLogin
  };

  return (
    <LoginContext.Provider value={contextValue}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
