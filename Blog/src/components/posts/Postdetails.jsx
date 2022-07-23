import axios from 'axios';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useParams, useNavigate} from 'react-router-dom';
import { getposts } from '../../Redux/Fetchdata/action';
import "./Style.css"
export default function Postdetails() {
const [post, setpost] = useState([])
    const {id} = useParams()
const navigate = useNavigate()
const sendid = (id)=>{
    if(id){
        navigate(`/postdetails/${id}`)

    }
}



const dispatch=(useDispatch())
const {data, getdata} = useSelector((state)=> state.data)
    

useEffect(()=>{
    axios.get(`https://masaischool.herokuapp.com/posts/${id}`)
    .then((e)=>{
        setpost(e.data)
    })
    dispatch(getposts())
},[id])

// console.log(data)

  return (
    <div>
<div id="fb-root"></div>
<script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v14.0&appId=2968317800092904&autoLogAppEvents=1" nonce="dD1r9GO2"></script>
<main className="container container2">
  <header className="header2">
    <p className="subheading">{post.title}</p>
    <h1 className="heading">{post.heading}</h1>
  </header>
  <section className="content content2">
    <img src={post.img} alt='large-image' className="poster-image" />
    <div className="fb-comments" data-href="https://masaischoolblog.netlify.app/" data-width="" data-numposts="2"></div>
    <iframe className='mt-2'  src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fresonant-crumble-45576d.netlify.app%2F&width=120&layout=button&action=like&size=small&share=true&height=65&appId=2968317800092904" width="120" height="65"  scrolling="no"  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>

    <p >{post.description}</p>
  </section>


  <aside className="aside">
    <h4 className="heading">Other Articles you might Enjoy</h4>
    {data.map((e)=>(

        <div key={e.id} onClick={()=> sendid(e.id)} className="card">
      <img src={e.img} alt='' />
      {/* <iframe  src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fresonant-crumble-45576d.netlify.app%2F&width=120&layout=button&action=like&size=small&share=true&height=65&appId=2968317800092904" width="120" height="65"  scrolling="no"  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe> */}
      
      <div>
        <p className="heading title">{e.title}</p>
        <h5 className="author">{e.heading}</h5>
      </div>
    </div>
        ))}
 
  </aside>
 
</main>

    </div>
  )
}
