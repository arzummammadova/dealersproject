import React, { useEffect } from 'react'
import './admin.scss'
import { useDispatch, useSelector } from 'react-redux'
import { createnewProduct, deleteProduct, fetchProduct, sortbyPrice } from '../../redux/features/productSlice'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useFormik } from 'formik';
import schema from '../../components/schema/productSchma';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
const Admin = () => {

    const products = useSelector((state) => state.products.products) ||[]
    const dispatch = useDispatch()

    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    useEffect(() => {

        dispatch(fetchProduct())
    }, [dispatch]);
    console.log(products)

    const removeProduct=(id)=>{
        dispatch(deleteProduct(id))
    }

    const sortlh=()=>{
       dispatch(sortbyPrice())

    }

    const formik = useFormik({
        initialValues: {
          name: '',
          image: '',
          price: '',
        },
        validationSchema:schema,
        onSubmit: values => {
         dispatch(createnewProduct(values))
         handleClose()
         formik.resetForm()
        },
      });
  return (
    <>
       


<div class="container">
<h1>Admin Panel</h1>
<button className='btn btn-primary' onClick={()=>{sortlh()}}>sort low-high</button>
<button class='btn btn-warning' onClick={handleOpen}>Create Product</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

            <h2 style={{textAlign:"center"}}>Create new product</h2>
            <form onSubmit={formik.handleSubmit}>
      
       <input style={{width:"100%"}}
         id="name"
         name="name"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.name}
       />
        {formik.errors.name? <div style={{color:"red"}}>{formik.errors.name}</div> : null}
        <input style={{width:"100%"}}
         id="image"
         name="image"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.image}
       />
         {formik.errors.image? <div style={{color:"red"}}>{formik.errors.image}</div> : null}
       
       <input style={{width:"100%"}}
         id="price"
         name="price"
         type="number"
         onChange={formik.handleChange}
         value={formik.values.price}
       />
         {formik.errors.price? <div style={{color:"red"}}>{formik.errors.price}</div> : null}
 

 
       <button className='btn btn-primary' type="submit">Submit</button>
     </form>
       
 
     
        </Box>
      </Modal>
	<div class="table">
		<div class="table-header">
			<div class="header__item"><a id="name" class="filter__link" href="#">Name</a></div>
			<div class="header__item"><a id="wins" class="filter__link filter__link--number" href="#">image</a></div>
			<div class="header__item"><a id="draws" class="filter__link filter__link--number" href="#">$price</a></div>
			<div class="header__item"><a id="losses" class="filter__link filter__link--number" href="#">desc</a></div>
            <div class="header__item"><a id="losses" class="filter__link filter__link--number" href="#">descriotion</a></div>
			<div class="header__item"><a id="total" class="filter__link filter__link--number" href="#">Action</a></div>
		</div>
		<div class="table-content">	
            {
                products.length>0?(
                   products.map((product)=>
                    <div class="table-row" key={product._id}>	
               
				<div class="table-data">{product.name}</div>
				<div class="table-data"><img src={product.image} alt="" /></div>
				<div class="table-data">${product.price}</div>
				<div class="table-data">{product.description}</div>
				<div class="table-data">5</div>
                <div class="table-data"><button class='btn btn-danger' onClick={()=>{removeProduct(product._id)}}>delete</button></div>
			</div>
                )
                ):("no product")
            }
			
		
			
		</div>	
	</div>
</div>
    
    
    </>
  )
}

export default Admin
