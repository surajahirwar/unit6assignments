import React from 'react'
import "./Style.css"

export default function Slider() {
  return (<div>
    
  <div  id="myCarousel" className="carousel main_slider " data-bs-ride="carousel">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        {/* <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg> */}
        <img className="bd-placeholder-img" width="100%" aria-hidden="false" preserveAspectRatio="xMidYMid slice" focusable="false" height="100%" src="https://raw.githubusercontent.com/surajahirwar/unit6assignments/main/Blog/public/posts/post3.jpg" />

        <div className="container">
          <div className="carousel-caption text-start">
            <h1>Learn about masai </h1>
            <p>The Maasai inhabit the African Great Lakes region and arrived via the South Sudan. Most Nilotic speakers in the area, including the Maasai, the Turkana and the Kalenjin, are pastoralists, and are famous for their fearsome reputations as warriors and cattle-rustlers.</p>
            {/* <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p> */}
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <img className="bd-placeholder-img" width="100%" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" height="100%" src="https://raw.githubusercontent.com/surajahirwar/unit6assignments/main/Blog/public/posts/post1.jpg" />
        {/* <svg  xmlns="http://www.w3.org/2000/svg" ><rect width="100%" height="100%" fill="#777"/></svg> */}

        <div className="container">
          <div className="carousel-caption">
            <h1>Learn about Django</h1>
            <p>Django is a free and open-source, Python-based web framework that follows the model–template–views architectural pattern. It is maintained by the Django Software Foundation, an independent organization established in the US as a 501 non-profit.</p>
            {/* <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p> */}
          </div>
        </div>
      </div>
      <div className="carousel-item">
        {/* <svg className="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg> */}
        <img className="bd-placeholder-img" width="100%" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false" height="100%" src="https://raw.githubusercontent.com/surajahirwar/unit6assignments/main/Blog/public/posts/post2.jpg" />

        <div className="container">
          <div className="carousel-caption text-end">
            <h1>Learn about react js</h1>
            <p>React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies.</p>
            {/* <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p> */}
          </div>
        </div>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>

    </div>
  )
}
