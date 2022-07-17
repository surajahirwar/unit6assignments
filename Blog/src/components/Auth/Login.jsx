
import React, { useState } from "react";
import "./Style.css"
import {Link} from "react-router-dom"
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login({ setLoginUser }) {
  const history = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios.post("https://lystclone.herokuapp.com/login", user).then((res) => {
      alert(res.data.message);
      // setLoginUser(res.data.user)
      console.log(res.data.user);
      console.log(res.data.message);
      if (res.data.message == "Login Successfull") {
        history("/");
      } else {
        history("/login");
      }
    });
  };



  return (
    <div>
           
<main className="form-signin login_mian w-25 ">

  <div class="mb-3 ">     
    </div>
    {/* <img className="mb-4" src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" /> */}
    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
      <div class="mb-3 ">
      <input  type="email" name="email"
            value={user.email}
            onChange={handleChange} class="form-control mb-3 " id="exampleFormControlInput1" placeholder="Enter your email" />
        <input type="password"  name="password"
            value={user.password}
            onChange={handleChange} class="form-control" id="exampleFormControlInput1" placeholder="Enter your password" />
    
      </div>

    <div className="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me" /> Remember me
      </label>
    </div>
    <button onClick={login} className="w-100 btn btn-sm btn-primary">Sign in</button>
    <Link style={{color:"lightblue", fontSize:"15px"}}   className="nav-link active" aria-current="page" to="/register">I don't have account</Link>

    <p className="mt-5 mb-3 text-muted">&copy; 2022–2023</p>
  
</main>


    </div>
  )
}

