import { useEffect, useState } from 'react';
import './home.css';
import { Card } from '../../components/card/card.jsx';
import { useProduct } from '../../hooks/products.jsx';
const Home = ()=>{
    const {products,getAllProducts} = useProduct();
    useEffect(getAllProducts,[])

    return(
        <div className="row p-3 gap-1">

            <div className="row gap-1">
                <div className='col'>
                    <h1>Productos</h1>
                </div>
                <div className=" col wrap gap-2 justify-center">

                    {
                        products?.map((prod,key)=><Card key={key} prod={prod}></Card>)
                    }
                </div>
                
            </div>

        </div>
    )
}

export default Home;