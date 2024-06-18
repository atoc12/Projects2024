import { useEffect, useState } from "react";
import { GET_API } from "../functions/getapi";

export const useProduct = () => {
    const [filter, setFilter] = useState(null);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const getAllProducts = ({path,callback}) => {
        setLoading(true);
        GET_API({ path: path || "products" }).then((res) => {

            if(callback){
                callback(res) 
            }else{
                setProducts(res);
            }
            setLoading(false);

        });
    }

    const getProduct = ({path,callback}) => {
        setLoading(true);
        GET_API({ path: "products/" + path }).then(res => {
            setProducts(res);
            setLoading(false);
            callback && callback();
        });
    }

    useEffect(()=>{
        console.log(products);
    },[products]);

    return { products, filter, setFilter, getAllProducts, getProduct, loading ,setProducts,setLoading};
}
