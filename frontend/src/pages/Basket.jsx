import React from 'react'
import './admin/admin.scss'
import { useDispatch, useSelector } from 'react-redux'
import { deletefromBasket } from '../redux/features/basketSlice'
const Basket = () => {
    const basket=useSelector((state)=>state.basket.basket)||[]
    const dispatch=useDispatch()
    const total=basket.reduce((sum,product)=>sum+product.count*product.price,0)
    
    const removebasketProduct=(id)=>{
        dispatch(deletefromBasket(id))
        
    }
  return (
   
    <div>
        <div className="container">
             <h1>Basket</h1>
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
                basket.length>0?(
                    basket.map((product)=>
                    <div class="table-row" key={product._id}>	
               
				<div class="table-data">{product.name}</div>
				<div class="table-data"><img src={product.image} alt="" /></div>
				<div class="table-data">${product.price*product.count}</div>
				<div class="table-data">{product.count}</div>
				<div class="table-data">{product.description}</div>
                <div class="table-data"><button class='btn btn-danger' onClick={()=>{removebasketProduct(product._id)}}>delete</button></div>
			</div>

                )
                ):("no product")
            }

            <h2>Total :{total
        }</h2>
			
		
			
		</div>	
	</div>
    </div>
  )
}

export default Basket
