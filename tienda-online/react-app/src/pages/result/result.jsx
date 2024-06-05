import {useLoaderData, useParams } from "react-router-dom"
import { Accordion ,AccordionItem} from "../../components/accordion/accordion"
import { useEffect, useState } from "react";
import { Card } from "../../components/card/card";
import { LuLayoutGrid, LuLayoutList } from "react-icons/lu";
import { useProduct } from "../../hooks/products";

export const ResultPage = ()=>{
    const [layoutGrid,setLayoutGrid] = useState("row");
    const {getAllProducts,getProduct,products,loading} = useProduct();
    const search = useLoaderData();

    useEffect(()=>{
        getAllProducts();
    },[])

    return(
        <div className="col min-h-100vh gap-1">

            <section className="row align-center min-w-200 max-w-200 col-1 bg-primary" aria-label="Aside filter and more">
                <Accordion className="row">

                    <AccordionItem title="Filtros">
                        
                        <form className="row col-1">

                            <section>

                                <label htmlFor="">Precio</label>

                                <input type="range" name="" id="" />

                            </section>




                        </form>
                        
                    </AccordionItem>

                    <AccordionItem title="Section 2">
                        <p>Content of Section 2</p>
                        <button>Button 2</button>
                    </AccordionItem>

                    <AccordionItem title="Section 3">
                        <p>Content of Section 3</p>
                        <button>Button 3</button>
                    </AccordionItem>
                    
                </Accordion>
            </section>

            <section className="row col-3 gap-2 bg-primary p-3 " aria-label="Content of the products">

                <section className="col w-full gap-2 col-1">

                    <h5>Layout</h5>

                    <section className="col gap-1">
                        <button className="btn" onClick={()=>setLayoutGrid("col")}>
                            <LuLayoutGrid />
                        </button>

                        <button className="btn" onClick={()=>setLayoutGrid("row")}>
                            <LuLayoutList/>
                        </button>

                    </section>

                </section>

                <div className={`h-full wrap ${layoutGrid} justify-center gap-3`}>
                    {
                        loading ? 
                            <div className="h-full">Cargando...</div>
                        :
                        products?.map((prod,key)=>{
                            return(
                                <div key={key} className={`${layoutGrid == "col" ? "col-1 max-w-200 " : ""}`}>
                                    <Card prod={prod} />
                                </div>
                            )
                        })
                    }

                </div>

            </section>

        </div>
    )
}


export const resultLoader = async ({ request }) => {
    const url = new URL(request.url);
    const searchQuery = url.searchParams.get("search");

    return await new Promise((resolve) => {
        setTimeout(() => {
            resolve({ searchQuery }); // Return as an object for better handling in component
        }, 1000);
    });
};







