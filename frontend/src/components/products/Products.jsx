import React, { useEffect } from 'react'
import Cards from '../card/Cards'
import './Products.scss'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from '../../redux/features/productSlice'
import { addtobasket } from '../../redux/features/basketSlice'
import { CiHeart } from "react-icons/ci";
import { IoIosHeart } from "react-icons/io";
import { addandremove } from '../../redux/features/wishlistSlice'


const Products = () => {
    const products = useSelector((state) => state.products.products) ||[]
    const basket=useSelector((state)=>state.basket.basket) 
    const wishlist=useSelector((state)=>state.wishlist.wishlist)
    // console.log(wishlist)
    // console.log(basket)
    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(fetchProduct())
    }, [dispatch]);
    // console.log(products)

    const addtocard=(product)=>{
        dispatch(addtobasket(product))

    }
    const toggleWish=(product)=>{
        dispatch(addandremove(product))
    }

    return (
        <>

            <section id='products'>

                <div className="products">
                    <div className="p-cards">
                        
                        {
                            products.length>0?(
                                products.slice(0,6).map((product)=>
                                    
                                    <div className="p-card"  key={product._id}>
                                        <div className="button" onClick={()=>{toggleWish(product)}}>
                                            {
                                                wishlist.find((item)=>item._id==product._id)?( <IoIosHeart />):(   <CiHeart />)
                                            }

                                     
                                       

                                        </div>
                                      


                                <figure>
                                    <img src={product.image} alt="" />
                                </figure>
                                <div className="name">
                                    {product.name}
                                </div>
                                <p>{product.description}</p>
                                <div className="price">${product.price}</div>
                                <button onClick={()=>{addtocard(product)}} className='btn btn-primary'>Add to card</button>

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
