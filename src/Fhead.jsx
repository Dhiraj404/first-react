import React from 'react';
import fruits from './img/fruits.png'
import fruits1 from './img/fruits-1.png'
import fruits2 from './img/fruits-2.png'

export default function fhead() {
  return <div>

<header>
<div class="container align-center position-relative pos">

<div class="row d-flex justify-content-center text-center">
    <div class="col-12 col-md-4 aa my-1">
    <img src={fruits} alt="sorry" />
    <h5>Fruits</h5>
    </div>
    <div class="col-12 col-md-4 aa mx-2 my-1">
    <img src={fruits1} alt="sorry" />
    <h5>Drinks</h5>
    </div>
    <div class="col-12 col-md-4 my-1 aa">
    <img src={fruits2} alt="sorry" />
    <h5>Vegetables</h5>
    </div>
  </div>
  </div>

</header>


  </div>;
}
