import { useState } from "react";
import axios from "axios";
import {useCookies} from 'react-cookie';
import { useNavigate } from "react-router-dom";

export const Auth = () =>{
    return (
    <div className="auth">
        <Login />
        <Register />
    </div>
    );
};

const Login = () =>{
    const [username, setUsername]= useState("");
    const [password, setPassword]= useState("");
    const [_, setCookies] = useCookies(["access_token"]);
    const navigate = useNavigate()
    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:3001/auth/login", { username, password });
            
            if (response.data.token) {
                setCookies("access_token", response.data.token);
                window.localStorage.setItem("userID", response.data.userID);
                navigate("/");
            } else {
                // Handle error message from backend
                window.alert(response.data.message);
            }
        } catch (err) {
            console.error(err);
            window.alert("An error occurred during login.");
        }
    };
    
    return ( 
        <Form 
        username={username}
         setUsername={setUsername}
          password={password}
           setPassword={setPassword}
           label="Login"
           onSubmit={onSubmit}/>
    );
};

const Register = () =>{
    const [username, setUsername]= useState("")
    const [password, setPassword]= useState("")

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:3001/auth/register", {
                username,
                password
            });
    
            if (response.status === 201) {
                window.alert("Registration completed. Now login!");
            } else {
                window.alert(response.data.message);
            }
        } catch (err) {
            if (err.response && err.response.data.message) {
                window.alert(err.response.data.message); // Error message from backend
            } else {
                window.alert("An error occurred during registration.");
            }
            console.error(err);
        }
    };
    

    return ( 
   <Form 
   username={username}
    setUsername={setUsername}
     password={password}
      setPassword={setPassword} 
      label="Register"
      onSubmit={onSubmit}/>
    );
};

const Form =({username, setUsername, password, setPassword, label,
onSubmit,})=>{
    return(
            <div className="auth-container">
                <form onSubmit={onSubmit}>
                    <h2>{label}</h2>
                    <div className="form-group">
                        <label htmlFor="username">Username: </label>
                        <input type="text"
                         id="username"
                         value={username}
                          onChange={(event) => setUsername(event.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password: </label>
                        <input type="password"
                         id="password" 
                         value={password}
                         onChange={(event) =>setPassword(event.target.value)}/>
                    </div>
                    <button type="submit">{label}</button>
                </form>
            </div>
    )
}