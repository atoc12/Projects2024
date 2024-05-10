import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from '../pages/home/home';
import { ProductsPage } from '../pages/products/products';
import { Index } from '../pages';

const RoutesComponent = ()=>{
    return(
        <BrowserRouter basename='/'>
            
                <Routes>
                    <Route path='*' element={ <> ERROR 404 Page not found</>} />
                    <Route element={<Index/>}>
                        <Route path='/' element ={<Home/>}> </Route>
                        <Route path='/:title/:id' element={<ProductsPage/>} ></Route>
                    </Route>
                </Routes>
            
        </BrowserRouter>
    )
}

export default RoutesComponent;