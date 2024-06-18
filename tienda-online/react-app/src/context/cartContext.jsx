import { createContext, useContext, useEffect, useState} from "react";// se importa hooks nativos de react

export const CartConext = createContext();// se crea un contexto


export const useCart = ()=>{ //se crea un custom hook
    
    const {cart,setCart,addItem,getCart,removeItem,getPrice} = useContext(CartConext);

    return {cart,setCart,addItem,getCart,removeItem,getPrice};
}


export const CartProvider = ({children})=>{ // se crea el componente con el provaider y algunas funciones que permitan modificar el carrito

    const formatCart = {
        list:[],
    }

    const [ cart,setCart ] = useState(formatCart);



    const addItem = ({item})=>{

        let cartList = cart;
        let result = cart.list.find(object_item => object_item?.id == item.id );
        
        if(result){
            
            console.log("ya se encuentra en el carrito");
            
        }else{

            cartList.list.push(item);
            setCart({...cartList});
        }


    }

    const getPrice = ()=>{

        let result = cart.list.reduce( (acumulador,valorActual) => acumulador + valorActual.price , 0)

        return result

    }

    const removeItem = ({item})=>{

        let result = cart.list.filter( itemList => itemList.id != item.id );

        setCart({list:result});

    }

    const getCart = ()=>{

        let cartTEMP = localStorage.getItem("CART");

        return JSON.parse(cartTEMP);
    }

    useEffect(()=>{
        setCart( getCart() ?? formatCart )
    },[])

    useEffect(()=>{
        localStorage.setItem("CART",JSON.stringify(cart))
    },[cart]);


    return (
        <CartConext.Provider value={{cart,setCart,addItem,getCart,removeItem,getPrice}}>
            {children}
        </CartConext.Provider>
    )
}