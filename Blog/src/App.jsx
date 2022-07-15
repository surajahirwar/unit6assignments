import { Route, Routes } from "react-router-dom"
import ContectUs from "./components/contectus/ContectUs"
import Fotter from "./components/fotter/Fotter"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Post from "./components/posts/Post"

function App() {

  return (
    <div className="App">
    <Header />
    <Routes>
      <Route path="/post" element={<Post /> } />
      <Route path="/" element={<Home />} />
      <Route path="/contectus" element={<ContectUs />} />
    </Routes>

    <Fotter/>
    </div>
  )
}

export default App
