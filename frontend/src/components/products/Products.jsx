import React, { useEffect } from 'react'
import Cards from '../card/Cards'
import './Products.scss'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../../redux/features/productSlice'

const Products = () => {
    const products = useSelector((state) => state.products.products) ||[]
    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(fetchProduct())
    }, [dispatch]);
    // console.log(products)
    return (
        <>

            <section id='products'>

                <div className="products">
                    <div className="p-cards">
                        {
                            products.length>0?(
                                products.slice(0,6).map((product)=>
                                    <div className="p-card" >
                                <figure>
                                    <img src={product.image} alt="" />
                                </figure>
                                <div className="name">
                                    {product.name}
                                </div>
                                <p>{product.description}</p>
                                <div className="price">${product.price}</div>
                                <button className='btn btn'>Add to card</button>
                            </div>
    
                                )
                            ):("no product")
                        }

                      

                    </div>
                </div>

            </section>

        </>
    )
}

export default Products
