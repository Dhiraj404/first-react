


import React, { useState } from 'react';

export default function Header() {
    const [cart, setCart] = useState(0)
    return <span className="container-fluid px-5 ml-5 d-inline position-absolute py-3 aaac text-lg-end ">
           

              <button onClick={() => setCart(cart + 1)} type="button" className="btn btn-primary position-fixed">
                    Items
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {cart}
                        <span class="visually-hidden">unread messages</span>
                    </span>
                </button>
            </span>





}
