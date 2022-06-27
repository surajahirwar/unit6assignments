let timerid
function mainfunc(main,delay){
  if(timerid){
    clearTimeout(timerid)
  }
  timerid=setTimeout(()=>{
     main()
  },delay)
}


async function main(){
   
    let val=document.querySelector("#inputval").value
   let data=await fetch(`https://maxfashionbackendclone.herokuapp.com/women?q=${val}`)
   data=await data.json()
   dataappend(data)
}

function dataappend(data){
    let maindiv=document.querySelector("#prodiv")
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