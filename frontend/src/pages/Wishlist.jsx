import React from 'react'
import './admin/admin.scss'
import { useDispatch, useSelector } from 'react-redux'
import { deletewishlist } from '../redux/features/wishlistSlice'
const Wishlist = () => {
    const wishlist=useSelector((state)=>state.wishlist.wishlist)
    const dispatch=useDispatch()
    const removeWishlist=(id)=>{
        dispatch(deletewishlist(id))
        

    }
    // console.log(wishlist)
  return (
    <>

<div className="container">
             <h1>Wishlist</h1>
        <div class="table">  
        </div>

     
		<div class="table-header">
			<div class="header__item"><a id="name" class="filter__link" href="#">Name</a></div>
			<div class="header__item"><a id="wins" class="filter__link filter__link--number" href="#">image</a></div>
			<div class="header__item"><a id="draws" class="filter__link filter__link--number" href="#">$price</a></div>
			<div class="header__item"><a id="losses" class="filter__link filter__link--number" href="#">count</a></div>
            <div class="header__item"><a id="losses" class="filter__link filter__link--number" href="#">descriotion</a></div>
			<div class="header__item"><a id="total" class="filter__link filter__link--number" href="#">Action</a></div>
		</div>
		<div class="table-content">	
            {
                wishlist.length>0?(
                    wishlist.map((product)=>
                    <div class="table-row" key={product._id}>	
               
				<div class="table-data">{product.name}</div>
				<div class="table-data"><img src={product.image} alt="" /></div>
				<div class="table-data">${product.price*product.count}</div>
				<div class="table-data">{product.count}</div>
				<div class="table-data">{product.description}</div>
                <div class="table-data"><button class='btn btn-danger' onClick={()=>{removeWishlist(product._id)}}>delete</button></div>
			</div>

                )
                ):("no product")
            }

		
			
		</div>	
	</div>

       
      
    </>
  )
}

export default Wishlist
