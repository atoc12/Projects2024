import {Link, useLoaderData, useParams } from "react-router-dom"
import { Accordion ,AccordionItem} from "../../components/accordion/accordion"
import { useEffect, useState } from "react";
import { Card } from "../../components/card/card";
import { LuLayoutGrid, LuLayoutList } from "react-icons/lu";
import { useProduct } from "../../hooks/products";
import { Loader } from "../../components/loader/loader";
import { useQueryParams } from "../../hooks/queryParams";

export const ResultPage = ()=>{
    const [layoutGrid,setLayoutGrid] = useState("col");
    const queryParam = useQueryParams();
    const {getAllProducts,products,setProducts,filter,setLoading,setFilter,loading} = useProduct();

    const [search,setSearch] =useState(queryParam.get("search"));

    const [category, setCategory] = useState([]);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState("100000");

    useEffect(() => {
        getAllProducts({ path: "products/categories", callback: (res) => setCategory(res) });
        
    }, []);

    useEffect(()=>{
        setSearch(queryParam.get("search"));
    },[queryParam]);

    useEffect(() => {
        const fetchFilteredProducts = async () => {
            setLoading(true);
            await getAllProducts({
                callback: (res) => {
                    const result = res.filter((item) => {
                        const matchesSearch = search
                            ? Object.values(item).some(
                                  (value) =>
                                      typeof value === "string" &&
                                      value.toLowerCase().includes(search.toLowerCase())
                              )
                            : true;
                        const matchesCategory = filter ? item.category === filter : true;
                        const matchesPrice = item.price >= minPrice && item.price <= maxPrice;

                        return matchesSearch && matchesCategory && matchesPrice;
                    });

                    setProducts(result);
                    setLoading(false);
                },
            });
        };

        fetchFilteredProducts();
    }, [search, filter, minPrice, maxPrice]);


    return(
        <div className="col min-h-100vh gap-1 justify-between">

            <section className="row min-w-200 max-w-200 gap-2 col-1 bg-primary p-2" aria-label="Aside filter and more">

                <Accordion className="row p-1 gap-2" openAll={true} >

                    
                    <AccordionItem title="Precio">
                        
                        <form className="row col-1 p-2">

                            <section>

                                <section className="col justify-around">
                                    <label htmlFor="min-input">Minimo:</label>
                                    <input type="number" value={minPrice} onChange={(e)=>setMinPrice(Number(e.target.value))} className="max-w-50 input-forms no-forms no-aparence" />
                                </section>

                                <input 
                                    type="range" 
                                    name="" 
                                    id="min-input" 
                                    value={minPrice} 
                                    max="1000000"
                                    step="10"
                                    onChange={(e) => setMinPrice(Number(e.target.value))}
                                />

                            </section>

                            <section>

                                <section className="col justify-around">
                                    <label htmlFor="max-input">Maximo:</label>
                                    <input type="number" value={maxPrice} onChange={(e)=>setMaxPrice(Number(e.target.value))} className="max-w-50 input-forms no-forms no-aparence" />
                                </section>

                                <input 
                                    type="range"
                                    name="" 
                                    id="max-input" 
                                    value={maxPrice} 
                                    max="1000000"
                                    step="10" 
                                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                                />

                            </section>

                        </form>
                        
                    </AccordionItem>

                    <AccordionItem title="Categorias">

                        <div className="p-2 row">
                            {
                                category.map((value,key)=>{
                                    return(
                                        <button className="btn text-start p-1" value={value} key={key} onClick={()=>setFilter(value)} > {value} </button>
                                    )
                                })
                            }
                            

                        </div>
                    </AccordionItem>

                    <AccordionItem title={"Otros"}>

                        <div className="p-2 row">
                            <button className="row p-1 text-theme btn text-start"> Historial </button>
                            <button className="row p-1 text-theme btn text-start"> Favorito </button>
                        </div>

                    </AccordionItem>
                    
                </Accordion>
            </section>

            <section className="row col-3 gap-2 bg-primary p-3 " aria-label="Content of the products">

                <section className="col col-1 justify-between">
                    <h4> busqueda realizada {search && search} </h4>
                    <span> resultados totales: { products?.length } </span>
                </section>

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
                            <div className="h-full w-full row align-center"><Loader/></div>
                        :
                        <>
                            {
                                products?.length>0 ? products?.map((prod,key)=>{
                                    return(
                                        <div key={key} className={`${layoutGrid == "col" ? "col-1 max-w-200 " : ""}`}>
                                            <Card prod={prod} title_wrap={layoutGrid == "col" ? false : true} />
                                        </div>
                                    )
                                })
                                :
                                "no hay resultados"
                        }

                        </>
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







