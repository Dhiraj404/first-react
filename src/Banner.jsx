import React from 'react';

export default function Banner() {
  return (
            
          <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="img/cro4.jpeg" className="d-block w-100 hh" alt="sorry" />
      <div class="carousel-caption d-none d-md-block carta">
        <h2 className="dhrka py-3">Start Now</h2>
        {/* <hr className="dhrka"/> */}
        <p className="py-3">Great Vegitables at your doorstep</p>
        <button type="button" class="btn btn-success">Shop Now !</button>
      </div>
    </div>
    <div className="carousel-item">
      <img src="img/cro2.jpeg" className="d-block w-100 hh" alt="Sorry!" />
      <div class="carousel-caption d-none d-md-block carta">
        <h2 className="dhrka py-3">Organic Food</h2>
        {/* <hr className="dhrka"/> */}
        <p className="py-3">Add Great ingredients to your diet</p>
        <button type="button" class="btn btn-success">Shop Now !</button>
      </div>
    </div>
    <div className="carousel-item">
      <img src="img/crou3.jpeg" className="d-block w-100 hh" alt="sorry" />
      <div class="carousel-caption d-none d-md-block carta">
        <h2 className="dhrka py-3">Veg Shop</h2>
        {/* <hr className="dhrka"/> */}
        <p className="py-3">Start Healthy lifestyle now</p>
        <button type="button" class="btn btn-success">Shop Now !</button>
      </div>
      
    </div>
    
  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>


  )}
