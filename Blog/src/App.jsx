import { Route, Routes } from "react-router-dom"
import Fotter from "./components/fotter/Fotter"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Slider from "./components/home/Slider"
import Post from "./components/posts/Post"

function App() {

  return (
    <div className="App">

    <Header />

  <Slider />      

    <Routes>
      <Route path="/post" element={<Post /> } />
      <Route path="/" element={<Home />} />
    </Routes>

    <Fotter/>
    </div>
  )
}

export default App
