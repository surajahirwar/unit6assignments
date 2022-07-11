import React from 'react'
import "./Style.css"
export default function Home() {
  return (
    <div>         
        <main>
        <div className="container marketing">

        <div className="row heading_div" >
        <div className="col-lg-3">
            <img className="bd-placeholder-img rounded-circle" width="140" height="140" src='https://raw.githubusercontent.com/surajahirwar/unit6assignments/main/Blog/public/users/user1.jpg' />
            <h2 className="fw-normal">Heading</h2>
            <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
            <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
        </div>
        <div className="col-lg-3">
            <img className="bd-placeholder-img rounded-circle" width="140" height="140" src='https://raw.githubusercontent.com/surajahirwar/unit6assignments/main/Blog/public/users/user2.jpg' />
            <h2 className="fw-normal">Heading</h2>
            <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
            <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
        </div>
        <div className="col-lg-3">
            <img className="bd-placeholder-img rounded-circle" width="140" height="140" src='https://raw.githubusercontent.com/surajahirwar/unit6assignments/main/Blog/public/users/user3.jpg' />
            <h2 className="fw-normal">Heading</h2>
            <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
            <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
        </div>
        
       
        </div>


        <hr className="featurette-divider" />

        <div className="row featurette">
        <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">First featurette heading. <span className="text-muted">It’ll blow your mind.</span></h2>
            <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
            <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fresonant-crumble-45576d.netlify.app%2F&width=120&layout=button&action=like&size=small&share=true&height=65&appId=2968317800092904" width="120" height="65"  scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        </div>
        <div className="col-md-5">
            <img  width="500" height="500" role="img" preserveAspectRatio="xMidYMid slice" focusable="false" aria-label="Placeholder: 500x500" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src='https://raw.githubusercontent.com/surajahirwar/unit6assignments/main/Blog/public/posts/post1.jpg' />

        </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
        <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">Oh yeah, it’s that good. <span className="text-muted">See for yourself.</span></h2>
           
            <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
            <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fresonant-crumble-45576d.netlify.app%2F&width=120&layout=button&action=like&size=small&share=true&height=65&appId=2968317800092904" width="120" height="65"  scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            
            
        </div>
        <div className="col-md-5 order-md-1">
        <img  width="500" height="500" role="img" preserveAspectRatio="xMidYMid slice" focusable="false" aria-label="Placeholder: 500x500" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src='https://raw.githubusercontent.com/surajahirwar/unit6assignments/main/Blog/public/posts/post2.jpg' />


        </div>
        </div>

        <hr className="featurette-divider" />

        <div className="row featurette">
        <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">And lastly, this one. <span className="text-muted">Checkmate.</span></h2>
            <p className="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
            <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fresonant-crumble-45576d.netlify.app%2F&width=120&layout=button&action=like&size=small&share=true&height=65&appId=2968317800092904" width="120" height="65"  scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            
            <div class="fb-comments" data-href="http://localhost:3000/" data-width="" data-numposts="5"></div>
        </div>
        <div className="col-md-5">
        <img  width="500" height="500" role="img" preserveAspectRatio="xMidYMid slice" focusable="false" aria-label="Placeholder: 500x500" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src='https://raw.githubusercontent.com/surajahirwar/unit6assignments/main/Blog/public/posts/post3.jpg' />


        </div>
        </div>

        <hr className="featurette-divider" />

      

        </div>


       
</main>    

    </div>
  )
}
