


export const adddata=(data)=>{
    return {
        type,
        payload:data
    }
}

export const getData=()=>{
    return async(dispatch)=>{
         try {
             let res=await fetch("http://localhost:8080/posts")
             let data=await res.json()
             dispatch(adddata(data))
         } 
         catch(error){
            console.log(error)
         }
      }
}