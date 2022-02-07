import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import leamon from './img/leamon.png'
import leamon1 from './img/orange.png'
import leamon2 from './img/pine.png'
import leamon3 from './img/kiwi.jpeg'
import leamon4 from './img/straw.png'
import leamon5 from './img/kiwi.jpeg'
import leamon6 from './img/fhealth.png'




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
<img src={leamon1} alt="as" style={{height: '346px'}} />
</div>
<div class="item ">
<img src={leamon} alt="as"style={{height: '346px'}} />

</div>
<div class="item ">
<img src={leamon2} alt="as" style={{height: '346px'}}   />

</div><div class="item ">
<img src={leamon3} alt="as" style={{height: '346px'}} />

</div><div class="item ">
<img src={leamon4} alt="as" style={{height: '346px'}} />

</div>

<div class="item ">
<img src={leamon5} alt="as"  style={{height: '346px'}}/>

</div>

<div class="item">
<img src={leamon6} alt="as" style={{height: '346px'}} />

</div>

</OwlCarousel>
</div>

    )

  }
}

