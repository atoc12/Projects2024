import { useEffect } from 'react';
import './home.css';
import { Card } from '../../components/card/card.jsx';
import { useProduct } from '../../hooks/products.jsx';
import { Slider } from '../../components/slider/slider.jsx';
import { Link } from 'react-router-dom';
import { useHistory } from '../../hooks/history.jsx';
const Home = ()=>{
    const {products,getAllProducts,loading} = useProduct();
    const {history} = useHistory();

    useEffect(()=>{
        getAllProducts({});
    },[]);

    return(
        <div className="row p-3 gap-1">

            <div className='col bg-primary h-250'>

                <section className='col-1 relative '>
                    <img className='w-full h-full duplicate-img-index object-cover aspect-4-3' src="/public/img/banner/banner1.jpg" alt="" />
                    <img className='duplicate-img-blur' src="/public/img/banner/banner1.jpg" alt="" />
                </section>

            </div>

            <div className="flex row gap-1">
                <div className='col p-2'>
                    <h1 className='x-text'>Productos <Link className='small-text no-decoration' to="/result/">ver más</Link></h1>
                </div>

                <div className='row'>
                    <Slider loading={loading} size={5} element={<Card loading={true} />}>
                            {
                                products?.map((prod, key) => <Card key={key} prod={prod}></Card>)
                            }
                    </Slider>
                </div>
                
            </div>

                {
                    history?.products.length > 0 &&
                    <div className="flex row gap-1">
                        <div className='col p-2'>
                            <h1 className='x-text'>Historial <a className='small-text no-decoration' href="">ver más</a></h1>
                        </div>

                            <Slider>
                                    {history?.products.map((prod, key) => <Card key={key} prod={prod}></Card>)}
                            </Slider>

                    </div>
                }

            <div className="flex row gap-1">

                <section className='col gap-2 bg-gradient-primary p-3 br-1 wrap'>

                    <div className='row text-primary p-2 text-theme bg-primary col-1'>

                        <section className='flex justify-center '>
                            {
                                products && <Card className='max-w-200' prod={products[5]} ></Card>
                            }
                        </section>

                    </div>

                    <div className='col-1 justify-around col bg-primary wrap p-2'>
                        {products && <Card className='max-w-200' prod={  products[4]} ></Card>}
                        {products &&<Card className='max-w-200' prod={ products && products[3]} ></Card>}
                        {products && <Card className='max-w-200' prod={ products && products[6]} ></Card>}
                    </div>

                </section>

            </div>

        </div>
    )
}

export default Home;