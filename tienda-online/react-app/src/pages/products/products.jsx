import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { useProduct } from "../../hooks/products";
import { Slider } from "../../components/slider/slider";
import { Card } from "../../components/card/card";

export const ProductsPage = ()=>{
    const {title,id} = useParams();
    const {getProduct,getAllProducts,products,setProducts,loading} = useProduct();
    const [other,setOther] = useState(null);
    const [image,setImage] = useState(null);

    const [load,setLoad] = useState(true);

    useEffect(()=>{
        setLoad(true);
        setImage(null);
        setProducts(null);
        getProduct(id);
        getAllProducts((res)=>setOther(res))
        window.scrollTo(0, 0);
    },[title,id])

    useEffect(()=>{

        if(products?.image){
            const imgLoad = new Image();
            imgLoad.src = products.image;
            imgLoad.onload = ()=>{
                setImage(products.image);
                setLoad(false);
            }
        }

    },[products])

    return(
        <div className="flex gap-2 wrap">

            <div className="col col-1 wrap gap-2">

                <section className=" row col-3 h-full bg-primary">
                    
                    <div className="col col-1 gap-1 p-2 wrap min-h-600 p-3 justify-between ">

                        <section className="bg-primary col-1 justify-center flex shadow-2 br-3 overflow-hidden">
                                {
                                    load ? 
                                       <span className="w-full min-w-300 h-full block skeleton-loader"></span>
                                    :
                                        <div className="w-full h-full max-w-500">
                                                    <img src={ image } className="op-animation w-full h-full object-contain aspect-4-3" alt={products?.title} />
                                        </div>
                                }
                        </section>

                        <section className="row gap-1 p-2 min-w-300">
                            <div className="col-1 row max-w-300 gap-2 ">

                                <section className="col">
                                    {
                                        load ?
                                         <span className="block chip min-w-100 h-10 skeleton-loader"></span>
                                        :<span className="chip small-text chip-secondary min-w-50">{products?.category}</span>
                                    }
                                </section>
                                
                                {
                                    load ? 
                                    <>
                                        <div className="flex gap-1">
                                            <span className="w-200 h-20 block skeleton-loader br-2"></span>
                                            <span className="w-100 h-20 block skeleton-loader br-2"></span>
                                        </div>
                                    </>
                                    :<h1 className="x-text"> { products?.title } </h1>
                                }
                                
                                <section>
                                    {
                                        load ? 
                                            <span className="block w-100 h-20 skeleton-loader br-2"></span>
                                        :
                                            <span className="x-text">
                                                ${products?.price}
                                            </span>
                                    }

                                </section>

                                <section>
                                    {
                                        load ?
                                            <span className="block w-100 h-30 br-2 skeleton-loader"></span>
                                        :
                                            <button className="btn btn-primary large-text p-2 br-1">Comprar</button>
                                    }
                                </section>

                            </div>
                        </section>

                    </div>


                    <div className="p-4 row gap-1">
                        <h1 className="large-text">Descripcion</h1>
                        <hr className="hrcolor" />
                        <p className="large-text">{products?.description}</p>
                    </div>

                </section>

            </div>

            <div className="col-1 row p-l-2 p-r-2 w-full h-full">

                <section className="w-full h-full">
                    <h1>Más productos</h1>
                    <Slider>
                        {
                            other?.map((prod,key)=><Card key={key} prod={prod}></Card>)
                        }
                    </Slider>
                </section>

                
            </div>

            <div className="col-1 row bg-primary p-3 br-2 gap-1">

                <h3>Opiniones y comentarios</h3>

                <section className="col-1 flex">
                    <form className="col-1 row p-b-2">
                        <input type="text" className="col-1 p-2" name="" id="" placeholder="..." />
                    </form>
                </section>
                <hr className="hrcolor"  />

                <section className="p-t-2">
                    <span>No hay comentarios...</span>
                </section>

            </div>

        </div>
    )
}