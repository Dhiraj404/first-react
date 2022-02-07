import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export default function Owl(){

  {
    return (
        
      <div className="owl-container text-center py-5">
        <h1 className="ai">Our <span> Services</span></h1>
    <OwlCarousel
    className="owl-theme py-5"
    loop
    margin={10}
    nav
>

<div class="item ">
<img src="img/orange.png" alt="as" style={{height: '346px'}} />
</div>
<div class="item ">
<img src="img/leamon.png" alt="as"style={{height: '346px'}} />

</div>
<div class="item ">
<img src="img/pine.png" alt="as" style={{height: '346px'}}   />

</div><div class="item ">
<img src="img/kiwi.jpeg" alt="as" style={{height: '346px'}} />

</div><div class="item ">
<img src="img/straw.png" alt="as" style={{height: '346px'}} />

</div>

<div class="item ">
<img src="img/kiwi.jpeg" alt="as"  style={{height: '346px'}}/>

</div>

<div class="item">
<img src="img/fhealth.png" alt="as" style={{height: '346px'}} />

</div>

</OwlCarousel>
</div>

    )

  }
}

