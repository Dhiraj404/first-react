import React from 'react';
import orange from './img/orange.png';
import orange1 from './img/apple.png';
import orange2 from './img/leamon.png';
import orange3 from './img/straw.png';
import orange4 from './img/pine.png';



export default function Products() {
  return (
      <div className="container text-center position-relative">
          
         <h2 className="ai">Sort of <span> our Products</span></h2>
         <div className="row pt-5 ms-auto ">
    <div className="col-md-6 col-12">
    <div className="float-start ">
   
   
    <img src={orange} alt="sory" className="res" />
<button className="position-absolute okxq btq">Dried</button>
     
     
     <img src={orange1} alt="sory" className="my-3" /> 
    <button className="position-absolute organic btq">Organic</button>
        
        
        <img src={orange2} alt="sory" className="mx-2" />
    <button className="position-absolute vegetables btq">Vegetables</button>

        </div>   
        
    </div>



    <div className="col-md-6 col-12 my-2 sa">
<div className="float-end ">

    <img src={orange3} alt="sory"/>
    <button className="position-absolute fruits btq">Fruits</button>


    <img src={orange4} alt="sorry" className="my-2"/>
    <button className="position-absolute nuts btq">Nuts</button>


    </div>
    </div>
  </div>
 
      </div>
  )
}
