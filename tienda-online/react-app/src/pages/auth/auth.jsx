import { Link, Outlet, useNavigate } from "react-router-dom"

export const AuthPage = ()=>{
    const navigate = useNavigate();
    return(
        <div className="min-h-100vh row">
            <header className="bg-color-primary p-2">
                <section className="container-xl">
                    <Link className="text-white no-decoration large-text" onClick={()=>navigate(-1)} role="link go back"> &#10094; Volver</Link>
                </section>
            </header>

            <section className="col col-1 container-xl m-2 bg-primary br-2 p-2 gap-2 shadow-2">

                <Outlet/>

            </section>

        </div>
    )
}