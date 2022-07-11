import React from 'react'
import "./Style.css"
export default function Post() {
  return (
    <div className='mb-5 w-50 form_div' style={{margin:"auto", marginTop:"100px"}} >

      <div class="mb-3 ">
        <label for="exampleFormControlInput1" class="form-label">
          Heading
        </label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter First Heading" />
      </div>
      
      <div class="mb-3 ">
        <label for="exampleFormControlInput1" class="form-label">
          Sub Heading
        </label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Secound Heading" />
      </div>
      <div class="mb-3">
        <input type="file" className="form-control" />
        <label for="exampleFormControlTextarea1" class="form-label">Write your text here.</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        <button className='btn btn-secondary btn-lx mt-5'>submit</button>
      </div>
    
    
    </div>
  )
}
