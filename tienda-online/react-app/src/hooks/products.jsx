import { useState } from "react";
import { GET_API } from "../functions/getapi";
export const useProduct = ()=>{
    const [filter,setFilter] = useState(null);
    const [products,setProducts] = useState();
    

    const getAllProducts = ()=>{
        GET_API({path:"products"}).then((res)=>{setProducts(res)})
        setProducts(products);
    }

    const getProduct = (id)=>{
        GET_API({path:"products/"+id}).then(res=>setProducts(res));
    }

    return {products,filter,setFilter,getAllProducts,getProduct}
}