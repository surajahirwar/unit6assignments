import React, { useState } from "react"
import {Link} from "react-router-dom" 
import axios from "axios"
import { useNavigate } from "react-router-dom"
import "./Style.css"

export default function Register () {

    const history = useNavigate()

    const [ user, setUser] = useState({
        email:"",
        password:"",
        
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const {  email, password,  } = user
        if( email && password  ){
            axios.post("https://lystclone.herokuapp.com/register", user)
            .then( res => {
                alert(res.data.message)
                history("/login")
            })
        } else {
            alert("invlid input")
        }
        
    }
  return (
    <div>

         
<main className="form-signin login_mian w-25 ">
 
    {/* <img className="mb-4" src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" /> */}
    <h1 className="h3 fw-normal">Please register in</h1>
    <div class="mb-3 ">
        <label for="exampleFormControlInput1" class="form-label">   
        </label>
        <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={user.email} placeholder="Enter your Email address" onChange={ handleChange } />
        <label for="exampleFormControlInput1" class="form-label">
            
        </label>
        <input type="password" class="form-control" id="exampleFormControlInput1" name="password" value={user.password} placeholder=" Enter your password Min 8 charactres" onChange={ handleChange } />
           
    </div>
    

    <div className="checkbox ">
      <label>
        <input type="checkbox" value="remember-me" /> Remember me
      </label>
    </div>
    <button className="w-100 btn btn-sm btn-primary" onClick={register}>Register</button>
    <Link style={{color:"lightblue", fontSize:"15px"}} className="nav-link active" aria-current="page" to="/login">I have account</Link>
    
    <p className="mt-5 mb-3 text-muted">&copy; 2022–2023</p>
 
</main>

    </div>
  )
}
