import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getposts } from '../../Redux/Fetchdata/action'
import Slider from './Slider'
import "./Style.css"
export default function Home() {

const dispatch=(useDispatch())
const {data, getdata} = useSelector((state)=> state.data)

useEffect(()=>{
        dispatch(getposts())
},[])


if(getdata.loading) return <div className="loading_div"><img src="https://i.imgur.com/buO4Nt2.gif" /></div>
if(getdata.error) return <div>Error...</div>  
  return (
    
    <div>
        <Slider />
        <main>
        <div className="container marketing">
            
    
        <div className="row heading_div" >
        <div className="col-lg-3">
            <img className="bd-placeholder-img rounded-circle" width="140" height="140" src='https://raw.githubusercontent.com/surajahirwar/unit6assignments/main/Blog/public/users/user1.jpg' />
            <h2 className="fw-normal">Suraj Ahirwar</h2>
            <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
            <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
        </div>
        <div className="col-lg-3">
            <img className="bd-placeholder-img rounded-circle" width="140" height="140" src='https://raw.githubusercontent.com/surajahirwar/unit6assignments/main/Blog/public/users/user2.jpg' />
            <h2 className="fw-normal">Abhishek pandey</h2>
            <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
            <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
        </div>
        <div className="col-lg-3">
            <img className="bd-placeholder-img rounded-circle" width="140" height="140" src='https://raw.githubusercontent.com/surajahirwar/unit6assignments/main/Blog/public/users/user3.jpg' />
            <h2 className="fw-normal">Arun kumar</h2>
            <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
            <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
        </div>
        
       
        </div>


        <hr className="featurette-divider" />
       
        {data.map((e)=> (
            <div key={e.id}>
                <div className="row featurette">
                <div className={e.id%2==0 ? "col-md-7 order-md-2" : "col-md-7"} >
                    <h2 className="featurette-heading fw-normal lh-1">{e.title}<span className="text-muted">{e.heading}</span></h2>
                    <p className="lead">{e.description}</p>
                     <div className="fb-comments" data-href="http://localhost:3000/"  data-numposts="2"></div>
                    <iframe  src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fresonant-crumble-45576d.netlify.app%2F&width=120&layout=button&action=like&size=small&share=true&height=65&appId=2968317800092904" width="120" height="65"  scrolling="no"  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                </div>
                <div className="col-md-5">
                    <img  width="500" height="500" role="img" preserveAspectRatio="xMidYMid slice" focusable="false" aria-label="Placeholder: 500x500" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src={e.img} />

                </div>
                </div>

                <hr className="featurette-divider" />
            </div>     
            ))} 
        </div>


        <div className="container marketing">




<hr className="featurette-divider" />


</div>
</main>    

    </div>
  )
}
