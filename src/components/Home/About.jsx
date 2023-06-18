import React from "react";

function About(props) {
  return (
	<div className="about mt-5">
    <div className="container">
		  <div className="section-title">
          <h2 className="heading-title"> عن الكلية  </h2>
        </div>
      <div className="row">
        <div className="col-12 col-md-12 col-lg-6 text-center pb-3">
          <img src={props.aboutData.manger_img} id='manger'  className="mb-3 img-doc" alt="" />
          <h2 className="fw-bold text-warning">{props.aboutData.manger_work} </h2>
          <h5 className="fw-bold ">{props.aboutData.manger_name}</h5>
          <p className="card-text">
          {props.aboutData.your_words}
          </p>
        </div>
        <div className="col-12 col-md-12 col-lg-6 ">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
       {props.images.map((image, i) =>(
       <div key={i} className={`carousel-item ${!i ?'active' :""}`}>
      <img src={image.img_bg} className="d-block w-100" alt="..."/>
    </div>
    
    ))}
  </div>
</div>
        </div>
      </div>
    </div>
	</div>
  );
}

export default About;
