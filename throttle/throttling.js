const mainthrottle=(main,delay)=>{
 
    return function(){
        main()
        setTimeout(()=>{
        },[main,delay])
      }
    
      
    
   
  }
  
  
  const mainfunc=mainthrottle(main,1000)
  let btn=document.querySelector("#getdata").addEventListener("click",mainfunc)
  
  async function main(){
    let val=document.querySelector("#inputvalue").value
    console.log(val,"value")
    let data=await fetch(`https://maxfashionbackendclone.herokuapp.com/men?q=${val}`)
    data=await data.json()
    dataappend(data)
  }
  
  function dataappend(data){
    let maindiv=document.querySelector("#divpro")
      maindiv.textContent=""
      data.map((e)=>{
          let appenddiv=document.createElement("div")
          let image=document.createElement("img")
          image.src=e.image
          let title=document.createElement("p")
          title.textContent=e.title
          appenddiv.append(image,title)
  
     
          maindiv.append(appenddiv)
  })
  }