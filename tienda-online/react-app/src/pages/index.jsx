import { Link, Outlet } from "react-router-dom"
import { FooterCustom } from "../components/footer/footer"
import { NavBar } from "../components/navbar/navbar"

export const Index = ()=>{
    return(
        <div id='home' className="row">

            <NavBar></NavBar>

            <div className="container-xl min-h-100vh op-animation overflow-hidden">

                <Outlet/>
            </div>


            <FooterCustom></FooterCustom>

        </div>
    )
}