import { Card } from "../../components/card/card";
import { useCart } from "../../context/cartContext";

export const CartPage = ()=>{
    const {cart,removeItem,getPrice} = useCart();

    return(
        <div className="row min-h-500 gap-1 wrap">
            <section className="col col-1 gap-1 min-h-500">

                <section className="row gap-1 col-3 bg-primary p-3">
                    <h1>Lista de compras</h1>

                    <section className="row gap-1">

                        {
                            cart.list?.map((cartItem,key)=>{
                                return(
                                    <div key={key} className=" relative ">
                                        <button className="text-theme absolute top-0 left-0 z-9 p-1" onClick={()=>removeItem({item:cartItem})} > &#10005; </button>
                                        <Card addButton={false} prod={cartItem}>

                                        </Card>
                                    </div>
                                )
                            })
                        }

                    </section>

                </section>

                <section className="col-1 bg-primary p-3">
                    <h2>Cuenta</h2>

                    <span>
                        ${getPrice()}
                    </span>
                    
                </section>
            </section>


        </div>
    )
}