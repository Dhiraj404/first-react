import React from 'react';

export default function Products() {
  return (
      <div className="container text-center position-relative">
          
         <h2 className="ai">Sort of <span> our Products</span></h2>
         <div className="row pt-5 ms-auto ">
    <div className="col-md-6 col-12">
    <div className="float-start ">
   
   
    <img src="img/orange.png" alt="sory" className="res" />
<button className="position-absolute okxq btq">Dried</button>
     
     
     <img src="img/apple.png" alt="sory" className="my-3" /> 
    <button className="position-absolute organic btq">Organic</button>
        
        
        <img src="img/leamon.png" alt="sory" className="mx-2" />
    <button className="position-absolute vegetables btq">Vegetables</button>

        </div>   
        
    </div>



    <div className="col-md-6 col-12 my-2 sa">
<div className="float-end ">

    <img src="img/straw.png" alt="sory"/>
    <button className="position-absolute fruits btq">Fruits</button>


    <img src="img/pine.png" alt="sorry" className="my-2"/>
    <button className="position-absolute nuts btq">Nuts</button>


    </div>
    </div>
  </div>
 
      </div>
  )
}
