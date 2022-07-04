import React from 'react'
import "./Style.css"
export default function Home() {
  return (
    <div>         
        <main>

            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner slider_div">
                <div className="carousel-item active">
                    <img style={{height:"500px"}} src="https://raw.githubusercontent.com/surajahirwar/unit6assignments/main/Blog/public/img/blog1.jpg" className="d-block w-100 vh-50" alt="..." />
                </div>
                <div className="carousel-item">
                    <img style={{height:"500px"}} src="https://raw.githubusercontent.com/surajahirwar/unit6assignments/main/Blog/public/img/blog2.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img style={{height:"500px"}} src="https://raw.githubusercontent.com/surajahirwar/unit6assignments/main/Blog/public/img/blog3.jpg" className="d-block w-100" alt="..." />
                </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
                </button>
            </div>


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
        </div>
        <div className="col-md-5">
        <img  width="500" height="500" role="img" preserveAspectRatio="xMidYMid slice" focusable="false" aria-label="Placeholder: 500x500" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" src='https://raw.githubusercontent.com/surajahirwar/unit6assignments/main/Blog/public/posts/post3.jpg' />


        </div>
        </div>

        <hr className="featurette-divider" />

      

        </div>


        <footer className="container">
        <p className="float-end"><a href="#">Back to top</a></p>
        <p>&copy; 2017–2022 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
        </footer>
</main>    

    </div>
  )
}
