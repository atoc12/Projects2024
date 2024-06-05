export const FooterCustom = ()=>{
    return(
        <footer className="bg-primary">

            <section className="row p-4 gap-3 container-xl">
                
                <section className="col wrap aling-center">

                    <article className="row col-1 gap-1 p-3">
                        <h5 className="text-cl-secondary">Redes sociales</h5>
                        <hr className="hrcolor" />
                        <ul className="small-text text-cl-secondary no-list">
                            <li>Instagram</li>
                            <li>Facebook</li>
                            <li>Twitter</li>
                        </ul>
                    </article>

                    <article className="row col-1 gap-1 p-3">
                        <h5 className="text-cl-secondary">Sobre nosotros</h5>
                        <hr className="hrcolor" />
                        <ul className="small-text text-cl-secondary no-list">
                            <li>Desarrollador</li>
                        </ul>
                    </article>

                    <article className="row col-1 gap-1 p-3">
                        <h5 className="text-cl-secondary">Herramientas utilizadas</h5>
                        <hr className="hrcolor" />
                        <ul className="small-text text-cl-secondary no-list">
                            <li>Lenguajes</li>
                            <li>Librerias</li>
                        </ul>
                    </article>

                    <article className="row col-1 gap-1 p-3">
                        <h5 className="text-cl-secondary">Más información</h5>
                        <hr className="hrcolor" />
                        <ul className="small-text text-cl-secondary no-list">
                            <li>Terminos y condiciones</li>
                            <li>Licencias</li>
                            <li>Ayuda</li>
                        </ul>
                    </article>
                </section>

                <section className="col aling-center justify-center small-text">
                    <span>
                        Copyrigth© 2023-2024 ExampleShop
                    </span>
                </section>

            </section>
            
        </footer>
    )
}