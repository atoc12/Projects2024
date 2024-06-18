import { Form, Link, useNavigate, useSubmit } from "react-router-dom"
import { BsCart } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { useState } from "react";
import { useCart } from "../../context/cartContext";

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
    const {cart} = useCart();
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

                            <Link to={"/cart"} className="mp-decoration text-white w-full h-full relative" role="Cart button" title="Cart" > 
                                <FaCartShopping className="x-text"/> 
                                {
                                   cart.list.length > 0 &&  <span className="absolute h-15 w-15 circle bottom-80 rigth-100 bg-red overflow-hidden flex align-center p-1 justify-center small-text" >{cart.list.length}</span> 
                                }
                            </Link>

                            <Link to={"/auth/login"} className="mp-decoration text-white w-full h-full" role="Accont button" title="Accont" > <FaRegUser className=" x-text"/> </Link>
                            
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