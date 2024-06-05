import { Form, Link, useNavigate, useSubmit } from "react-router-dom"
import { BsCart } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { useState } from "react";

const NavBarSearch = ()=>{
    let submit = useSubmit()
    const [search,setSearch] = useState(null);

    return(
                        
        <Form action="/result" className="col-1 row">
            <input className="col-1 b-0 h-full p-1 bg-primary br-2" type="search" name="search" placeholder='Buscar' />
        </Form>
    )
}

export const NavBar = ()=>{
    return(
        <>
            <div className='bg-color-primary bg-blur-01 sticky w-full top-0 left-0 z-99'>

                <section className="wrap col justify-between container-xl p-2 ">

                    <section className='col-1'>
                        <h1>
                            <Link to={"/"} className="no-decoration text-white">
                                Tienda Online
                            </Link>
                        </h1>
                    </section>

                    <section className='row col-2'>
                        <NavBarSearch/>
                    </section>

                    <section className="col col-2 ">

                        <div className="col-2">

                        </div>

                        <div className="col-1 col">

                            <Link to={"/cart"} className="mp-decoration text-white w-full h-full" role="Cart button" title="Cart" > <FaCartShopping className="x-text"/> </Link>

                            <Link to={"/auth"} className="mp-decoration text-white w-full h-full" role="Accont button" title="Accont" > <FaRegUser className=" x-text"/> </Link>
                            
                        </div>

                    </section>


                </section>
                <section className="relative bg-secondary">

                    <div className=" container-xl">

                        <ul className="no-list col w-full small-text wrap">

                            

                        </ul>
                    
                    </div>

                </section>



            </div>
        
        </>
    )
}