import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Card = ({ className = "", addButton = true, prod = {}, loading = true }) => {
    const [load,setLoad] = useState(loading);
    const [images, setImages] = useState(prod?.image);

    useEffect(() => {
        if (prod?.image) {
            const img = new Image();
            img.src = prod.image;
            img.onload = () => {
                setImages(prod.image);
                setLoad(false);
            };
        }
    }, [prod]);

    return (
        <Link className={`row col-1 br-1 no-link op-animation shadow-2 br-2 overflow-hidden ${className}`} to={load ? "#" : "../" + prod?.title + "/" + prod?.id}>
            <article className='bg-primary row h-full br-1 gap-1 col-1' data-category={prod?.category}>

                <section className='col-1 w-full h-full relative bg-primary max-w-300'>
                    {load ? (
                        <div className='min-w-200 min-h-150 skeleton-loader w-full h-full'></div>
                    ) : (
                        <img className={`object-contain object-center w-full h-full aspect-4-3 relative img-loader`} src={images} alt={ images && prod.title} load="lazy" />
                    )}

                    <div className="absolute bottom-3 left-2">
                        <span className={`chip bg-blur-01 chip-secondary x-small-text ${load && "min-w-50"} `}>{!load && prod?.category}</span>
                    </div>

                </section>

                <section className='row gap-1 p-2'>
                    {
                        load ?
                            <span className="block min-w-100 skeleton-loader br-2" style={{height:"10px"}}></span>
                        :
                            <h1 className='weight-600 text-ellipsis text-nowrap overflow-hidden small-text' title={prod?.title}>{prod?.title}</h1>
                    }

                    <section className='flex'>
                        {
                            load ? 
                                <span className="block min-w-50 skeleton-loader br-2" style={{height:"10px"}}></span>
                            :
                                <h3 className="text-theme weight-500">Price: <span className='success'>${prod?.price}</span></h3>
                        }
                    </section>

                    {addButton && (
                        <section className="col-1">


                            {
                                load ? 
                                    <span className="block skeleton-loader w-full h-30 br-2"></span>
                                    :
                                    <button className="w-full btn btn-primary p-1 br-1 medium-text">Añadir</button>
                            }
                        </section>
                    )}
                </section>
            </article>
        </Link>
    )
}
