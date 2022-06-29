
import { useEffect } from 'react';
import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [data, setdata] = useState("")
  const  [append, setappend] = useState([])
  let inputHandler = (e) => {
    var lowerCase = e.target.value;
    setdata(lowerCase);
  };

  useEffect(()=>{
        if(data.length >=2){
          axios.get(`http://localhost:8080/data?q=${data}`)
          .then((e)=> 
            setappend(e.data)
          )
        }
        else{
         
        }
   
        
  },[data])

  // console.log(append)
  
  return (
    <div className="App">
       <h1>search country</h1>
        <div>
          <input type="text" onChange={inputHandler}  placeholder='search here' />
          {data.length > 1 ? <div> {append.map((e)=>(
            
            <div key={e.country}>
              <p>{e.country}</p>
            </div>
          ))} </div>:""
        }
          
        </div>

    </div>
  )
}

export default App
