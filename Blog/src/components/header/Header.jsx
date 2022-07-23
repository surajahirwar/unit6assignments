import React from 'react'
import { Link } from 'react-router-dom';
import "./Style.css";
export default function Header() {
  return (
    <div>
        
<header>
  <nav className="navbar navbar-expand-md navbar-dark fixed-top main_navbar ">
    <div className="container-fluid">
      {/* <a className="navbar-brand" href="#">Logo</a> */}
      <Link style={{color:"red",fontWeight:"600", fontFamily:"sans-serif",  fontSize:"30px"}} className="nav-link active" aria-current="page" href="#" to="/"><img src="https://www.masaischool.com/img/navbar/logo.svg" /></Link>

      <button className="navbar-toggler" type="button" style={{color:"black", backgroundColor:"black"}} data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse navbar_ul" id="navbarCollapse">
        <ul className="navbar-nav me-auto mb-3 mr-50 mb-md-0">
          <li className="nav-item">
            <Link style={{color:"black"}} className="nav-link active dark" aria-current="page" href="#" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link style={{color:"black"}} className="nav-link active" aria-current="page" href="#" to="/post">Post</Link>
            
          </li>
          <li className="nav-item">
          <Link style={{color:"black"}} className="nav-link active" aria-current="page" href="#" to="/about">About Us</Link>
          </li>
          <li className="nav-item">
            
            <Link style={{color:"black"}} className="nav-link active" aria-current="page" href="#" to="/contectus">Contect Us</Link>
            
          </li>
        </ul>
        
          <button className="btn btn-outline-success" type="submit">
      <Link className="nav-link active" aria-current="page" to="/login">Login</Link>

          </button>
       
      </div>
    </div>
  </nav>
</header>

    </div>
  )
}
