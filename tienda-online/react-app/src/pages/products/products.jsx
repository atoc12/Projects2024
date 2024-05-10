import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { useProduct } from "../../hooks/products";

export const ProductsPage = ()=>{
    const {title,id} = useParams();
    const {getProduct,products} = useProduct();

    useEffect(()=>{
        getProduct(id);
    },[])

    useEffect(()=>{
        console.log(products);
    },[products])

    return(
        <div className="flex gap-2 wrap">

            <div className="row gap-3 col-3 bg-primary br-1 p-3">

                <section className="col wrap">

                    <section className="col-3 flex justify-center">
                        <img className="w-full max-w-600 h-full aspect-7-4 object-contain" src={products?.image} alt={title} loading="lazy" />
                    </section>

                    <section className=" row col-1 wrap gap-1 min-w-200 max-w-275">

                        <h1 className=""> {title} </h1>
                        <section>
                            <span className="text-small"> Rating {products?.rating.rate}/5 ({products?.rating.count})</span>
                        </section>
                        <h3>Price: <span className="succes">${products?.price}</span></h3>
                    </section>

                </section>


                <section className="col gap-2">

                    <section className="row gap-1">
                        <h5 className="text-secondary">Description</h5>
                        <hr className="hrcolor" />
                        <p>{products?.description}</p>
                    </section>


                </section>

            </div>

        </div>
    )
}