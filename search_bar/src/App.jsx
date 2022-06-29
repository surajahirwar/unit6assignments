
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [data, setdata] = useState("")

  let inputHandler = (e) => {
    var lowerCase = e.target.value;
    setdata(lowerCase);
  };

  useEffect(()=>{
        axios.get(`http://localhost:8080/data/?q=${data}`).then((e)=> console.log(e.data))

      // getdata()
  },data)

  
  return (
    <div className="App">
        hello
        <div>
          <input type="text" onChange={inputHandler}  placeholder='search here' />
        </div>
    </div>
  )
}

export default App
