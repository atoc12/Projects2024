import React, { useEffect, useRef } from 'react';
import { useProduct } from '../../hooks/products';
import { Card } from '../../components/card/card';
import { Slider } from '../../components/slider/slider';

const Test = () => {
  const {loading,getAllProducts,products} = useProduct();

  useEffect(()=>{

    getAllProducts();
  },[])
  
  useEffect(()=>{

    console.log(products)

  },[products]);
  
  useEffect(()=>{
    console.log(loading);
  },[loading])
  
  return (
    <div className='container-xl'>

      <Slider loading={loading} size={5} element={<Card loading={true}/>} >
        {products?.map((prod, key) => <Card key={key} prod={prod}></Card>)}
      </Slider>

    </div>
  );
} 

export default Test;