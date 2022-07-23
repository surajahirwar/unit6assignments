import axios from "axios";
import { GETPOSTS_ERROR, GETPOSTS_LOADING, GETPOSTS_SUCCESS } from "./type"


export const getposts = () => (dispatch)=>{
    dispatch({type:GETPOSTS_LOADING});
    axios.get("https://masaischool.herokuapp.com/posts")
    .then((e)=> {
        dispatch({type:GETPOSTS_SUCCESS, payload:e.data})
    })
    .catch(()=>{
        dispatch({type:GETPOSTS_ERROR, payload:null})
    });

}

export const addpost=(data)=>{
    return async(dispatch, getState, api) => {
        try {
             await fetch("https://masaischool.herokuapp.com/posts",{
                    method:"POST",
                    body:JSON.stringify(data),
                    headers:{
                        'Content-Type': 'application/json'
                    }
            })
            
            dispatch(getposts())
        } 
        catch (error) { 
            console.log(error)
        }
     }
   

}