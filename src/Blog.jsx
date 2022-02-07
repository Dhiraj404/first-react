import React from 'react';
import lake from './img/lakecar.jpeg';
import lake1 from './img/orange.png';
import lake2 from './img/pine.png';


export default function Blog() {
  return (

  <div className="container text-center py-5 position-relative">
      <h2 className="ai">Our <span> Blog</span></h2>
      <div className="container my-4">
  <div className="row ">
    <div className="col-12 col-md-4 ">

<div className="classs mt-2">
      <span> <p className="position-absolute ak lk">Feb 05, 2022</p> </span>
        <img src={lake} alt="sss" />
 <span>   <a href="" className="position-absolute asp lk ">    <h4>Erat partem accusam est.</h4>     </a></span>
            </div>
   

    </div>
    <div className="col-12 col-md-4">


<div className="classs mt-2">
<span> <p className="position-absolute akk lk">Feb 05, 2022</p> </span>

        <img src={lake1} alt="sss" />
        

        <span>   <a href="" className="position-absolute aspp lk">    <h4>Erat partem accusam est.</h4>     </a></span>


    </div>
   

    </div>
    <div className="col-12 col-md-4">
<div className="classs mt-2">
<span> <p className="position-absolute akkk lk">Feb 05, 2022</p> </span>

        <img src={lake2} alt="sss" />



    </div>
    <span>   <a href="" className="position-absolute asppp lk">    <h4>Erat partem accusam est.</h4>     </a></span>
   
    
    </div>
   
  </div>
  
 </div>
  </div>

  )}
