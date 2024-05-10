import { Outlet } from "react-router-dom"

export const Index = ()=>{
    return(
        <div id='home' className="row container-xl">

            <div className='bg-primary wrap col justify-between sticky w-full top-0 left-0 p-2'>

                <section className='col-1'>
                    <h1>Tienda Example</h1>                    
                </section>

                <section className='col-1'>
                    <form action="">
                        <input type="search" name="" id="" placeholder='Buscar'/>
                    </form>
                </section>

            </div>

            <Outlet/>

        </div>
    )
}