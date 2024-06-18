import { useEffect, useState} from "react";
import { useHistory } from "../hooks/history";
// import { useCartFunctions } from "../hooks/listCart";
import { CartConext, CartProvider} from "./cartContext";

const Context = ({children}) => {

    return (
        <CartProvider>
            {children}
        </CartProvider>

    )
}

export default Context;