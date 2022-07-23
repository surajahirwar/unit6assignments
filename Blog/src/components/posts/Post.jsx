import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { addpost } from '../../Redux/Fetchdata/action'
import "./Style.css"
export default function Post() {
  const disptach = useDispatch()
  const navigate = useNavigate()
  const [text,setText]=useState({
      title:"",
      heading:"",
      img:"",
      description:""
  })
  const update=(target)=>{
     setText({  
         ...text,
         [target.name]:target.value
     })
  }

  const sendme = ()=>{
    disptach(addpost(text))
    navigate(`/`)
  }
  var content = "suraj hairwaklj sdflk laweeriu slkfasl kddiosadfjasiof "
  const toShow = content.substring(0, 30) + "...";


  console.log(toShow)

  return (
    <div className='mb-5 w-50 form_div' style={{margin:"auto", marginTop:"100px"}} >
      <p>{toShow}</p>
      <div className="mb-3 ">
        <label className="form-label">
          Heading
        </label>
        <input required onChange={(e)=>update(e.target)} name="title" type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter First Heading" />
      </div>
      
      <div className="mb-3 ">
        <label className="form-label">
          Sub Heading
        </label>
        <input required onChange={(e)=>update(e.target)} name="heading" type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Secound Heading" />
      </div>
      <div className="mb-3">
        {/* <input type="file" className="form-control" /> */}
        <label className="form-label">
          Image Url
        </label>
        <input required onChange={(e)=>update(e.target)} name="img" type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter your Image url" />

        <label className="form-label">Write your text here.</label>
        <textarea onChange={(e)=>update(e.target)} name="description" type="text" className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        <button onClick={()=> sendme()} className='btn btn-secondary btn-lx mt-5'>submit</button>
      </div>
    
    
    </div>
  )
}
