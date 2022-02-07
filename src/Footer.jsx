import React from 'react';

export default function Footer() {
    const  categorye = 
    [
        {
            id: '1',  name: 'Party Flowers'
        },
        {
            id: '2',  name: 'Wedding Flowers'
        },
        {
            id: '3',  name: 'Valentine Flowers'
        },
        {
            id: '4',  name: 'Party Gifts'
        },
        {
            id: '5',  name: 'Birthday Flowers'
        },
        {
            id: '6',  name: 'Wedding Gift'
        },
        {
            id: '7',  name: 'Any Flowers'
        },
        {
            id: '8',  name: 'Callas Flowers'
        },
    ]
    const doubled = categorye.map((cat) => 
        <li>{cat.name}</li>
    );
    console.log(doubled);
    return (

        <div>

            <div className="container-fluid bg-dark text-white py-5">
                <div className="container">
                    <div className="row row-cols-4">
                        <div className="col-12 col-md-3">
                            <h5>Veggo Shop</h5>
                            <hr className="akm" />
                            <div className="ol">
                                <p>Kingston 123,  44 Kathmandu<br /> Nepal.</p>

                                <p> <span className="text-success">Phone: </span> &nbsp; +977-9803158421  </p>
                                <p> <span className="text-success">Email: </span> &nbsp; &nbsp; bariyaitdhiraj05@gmail.com </p>

                                <p> <span className="text-success">Website: </span> &nbsp; https://github.com/Dhiraj404  </p>
                            </div>
                        </div>




                        <div className="col-12 col-md-3">
                            <h5>Our Services</h5>
                            <hr className="akm" />
                            <div className="oll">
                                <ul>
                                    {doubled}
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-3">

                            <h5>Quick Links</h5>
                            <hr className="akm" />
                            <div className="oll">
                                <ul>
                                    <li>Party Flowers</li>
                                    <li>Wedding Flowers</li>
                                    <li>Valentine Flowers</li>
                                    <li>Party Flowers</li>
                                    <li>Birthday Flowers</li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-12 col-md-3">
                            <h5>News Letter</h5>
                            <hr className="akm" />
                            <div className="oll">

                                <form action="">
                                    <input type="text" name="" id="" placeholder="Email" />
                                    <btn className="btn btn-success mnb">Go</btn>

                                   
                                    <div className="my-3">
                                       Male: <input type="radio" />&nbsp;
                                       Female: <input type="radio" /> &nbsp;
                                       Other: <input type="radio" />

                                    </div>
                                    <div>
                                        Agree to terms:  <input type="checkbox"  />
                                    </div>
                                    <div>
                                    <button type="button" className="btn btn-primary mt-4 mx-3">Submit</button>
                                    </div>
                                </form>





                            </div>


                        </div>

                    </div>
                </div>



            </div>
        </div>
    )
}
