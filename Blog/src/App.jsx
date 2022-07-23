import { Route, Routes } from "react-router-dom"
import AboutUs from "./components/aboutus/AboutUs"
import Login from "./components/Auth/Login"
import Register from "./components/Auth/Register"
import ContectUs from "./components/contectus/ContectUs"
import Fotter from "./components/fotter/Fotter"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
// import { Switch} from "react-router-dom";

import Post from "./components/posts/Post"
import Postdetails from "./components/posts/Postdetails"
// import { useState } from "react"

function App() {
  
  // const [ user, setLoginUser] = useState({})
  return (
    <div className="App">
    <Header />
    <Routes>
   
        
      <Route path="/login" element={<Login />} /> 
      <Route path="/register" element={<Register />} />
      <Route path="/post" element={<Post /> } />
      <Route path="/about" element={<AboutUs />} /> 
      <Route path="/postdetails/:id" element={<Postdetails />} />
      <Route path="/" element={<Home />} />
      <Route path="/contectus" element={<ContectUs />} />
    </Routes>

    <Fotter/>
    </div>
  )
}

export default App
