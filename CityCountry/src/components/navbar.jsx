import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postData } from '../redux/action';
export const Navbar=()=>{
    const disptach=useDispatch()
    const [text,setText]=useState({
        city:"",
        country:"",
        population:""
    })
    const update=(target)=>{
       setText({
           ...text,
           [target.name]:target.value
       })
    }
    return (
        <div style={{width:"800px",display:"flex",justifyContent:"space-between",margin:"10px"}}>
              <TextField onChange={(e)=>update(e.target)} name='city' id="standard-basic" label="City" variant="standard" />
              <TextField onChange={(e)=>update(e.target)} name='country' id="standard-basic" label="Country" variant="standard" />
              <TextField onChange={(e)=>update(e.target)} name='population' id="standard-basic" label="Population" variant="standard" />
              <Button onClick={(e)=>disptach(postData(text))} variant="contained">ADD City</Button>
             
        </div>
    )
}