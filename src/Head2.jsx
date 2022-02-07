import React from 'react';
import round from './img/round.png';
export default function () {
  return (

    <div className="container-fluid  position-relative py-5 oho">
      <div className="row">
        <div className="col-12 col-md-6 d-none d-md-block">
          <img src={round} alt="Sody" className="iim ms-5" />
        </div>





        <div className="col-12 col-md-5 mt-5 pt-5">
          <h5>We sell the best fruits</h5>
          <h2 className="paxi">Dhiraj </h2>
          <h5 className="py-3">Mel ut eligendi Eu mei nonumy appetere eleifend.</h5>
          <p>Lorem ipsum dolor sit amet, enim modus populo pri ut. Ei elit vulputate intellegebat eam, id sea scriptorem signiferumque. Ei putant gloriatur qui. Per dicta deseruisse an. Ad veniam quaerendum vim, cu liber nullam salutatus qui. Eu mei nonumy appetere eleifend. Dicat oblique no sea.</p>
          <h4 className="pt-5">&nbsp; Order Now</h4>
          <h4><a href="tel:+977-9803158421" className="text-decoration-none"><i class="bi bi-telephone"> +977-9803158421 </i></a></h4>
          <button type="button" class="btn btn-success mt-5 ">Explore Collection</button>
        </div>
      </div>
    </div>


  )
}
