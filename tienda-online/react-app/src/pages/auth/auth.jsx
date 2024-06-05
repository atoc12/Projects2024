import { Link, Outlet } from "react-router-dom"

export const AuthPage = ()=>{
    return(
        <div className="min-h-100vh row">
            <header className="bg-color-primary p-2">
                <section className="container-xl">
                    <Link to={"/"} className="text-white no-decoration large-text"> &#10094; Inicio</Link>
                </section>
            </header>

            <section className="col col-1 container-xl m-2 bg-primary br-2 p-2 gap-2 shadow-2">

                <Outlet/>

            </section>

        </div>
    )
}