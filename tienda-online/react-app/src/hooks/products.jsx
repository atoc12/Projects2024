import { useState } from "react";
import { GET_API } from "../functions/getapi";

export const useProduct = () => {
    const [filter, setFilter] = useState(null);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const getAllProducts = (callback) => {
        setLoading(true);
        GET_API({ path: "products" }).then((res) => {

            if(callback){
                callback(res,loading) 
            }else{
                setProducts(res); setLoading(false);
            }

        });
    }

    const getProduct = (id) => {
        setLoading(true);
        GET_API({ path: "products/" + id }).then(res => {
            setProducts(res);
            setLoading(false);
        });
    }

    return { products, filter, setFilter, getAllProducts, getProduct, loading ,setProducts};
}
