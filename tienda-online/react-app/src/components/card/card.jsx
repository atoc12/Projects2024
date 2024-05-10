import { Link } from "react-router-dom"

export const Card = ({prod})=>{

    return(
        <Link className="row max-w-200 min-w-100 no-link"  to={prod.title+"/"+prod.id}>
            <article className='bg-primary row  br-1 gap-2 p-3 col-1' data-category={prod.category}>
                
                <section className='col-1 p-3'>

                    <img className='object-contain object-center w-full h-full' src={prod.image} alt={prod.title} loading="lazy" />

                </section>

                <section className='row gap-1'>

                    <h1 className='text-ellipsis text-nowrap overflow-hidden small-text' title={prod.title}>{prod.title}</h1>

                    <section className='flex'>

                        <h5 className="text-theme" >Price: <span className='succes'>${prod.price}</span> </h5>

                    </section>
                </section>

            </article>
        </Link>
    )
}