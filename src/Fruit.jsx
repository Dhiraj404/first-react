import React from 'react';
import health from './img/fhealth.png'

export default function Fruit() {
  return (
  

<div className="container-fluid aaran p-4 px-5">
  <div className="row">
    <div className="col-12 col-md-4 px-5 ">
   <h1 className="mx-5 text-warning py-4">
   Fruit & Health
   </h1>
       <hr />
       <p className="lh-2 py-3">Lorem ipsum dolor sit amet, enim modus populo pri ut. Ei elit vulputate intellegebat eam, id sea scriptorem signiferumque. Ei putant gloriatur qui. Per dicta deseruisse an. Ad veniam quaerendum vim, cu liber nullam salutatus qui. Eu mei nonumy appetere eleifend. Dicat oblique no sea. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum et minus tenetur consequuntur temporibus hic labore repellat facilis saepe quaerat.</p>
    <button type="button" className="btn btn-danger my-4 mx-5">Shop Now</button>
    </div>
    <div className="col-12 col-md-6 mx-auto ">
    <img src={health} className="heram"  alt="sas" />
    </div>
  </div>

  </div>
  )}
