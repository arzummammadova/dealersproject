import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'



export const fetchProduct = createAsyncThunk(
    'users/fetchProduct',
    async () => {
      const response = await axios("http://localhost:5000/api/products")
      return response.data
    },
  )



  export const deleteProduct = createAsyncThunk(
    'users/deleteProduct',
    async (id) => {
       await axios.delete(`http://localhost:5000/api/products/${id}`)
      return id
    },
  )

  export const createnewProduct = createAsyncThunk(
    'users/createnewProduct',
    async (newProduct) => {
        const response = await axios.post("http://localhost:5000/api/products",newProduct)
        return response.data
    },
  )

  export const sortbyPrice = createAsyncThunk(
    'users/sortbyPrice',
    async () => {
        const response = await axios("http://localhost:5000/api/products")
        const sorted=response.data.sort((a,b)=>a.price-b.price)
        return sorted
    },
  )






const initialState = {
  products: [],
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
     state.products=action.payload
    })
    .addCase(deleteProduct.fulfilled, (state, action) => {
      state.products=state.products.filter((product)=>product._id!==action.payload)
     })
     .addCase(createnewProduct.fulfilled, (state, action) => {
      state.products.push(action.payload)
     })
     .addCase(sortbyPrice.fulfilled, (state, action) => {
      state.products=action.payload
     })
  },
  
  


    // .addCase(deleteProduct.fulfilled, (state, action) => {
    //  state.products=state.products.filter((product)=product._id!==action.payload)
    // })

  // extraReducers: (builder) => {
  //   builder.addCase(createnewProduct.fulfilled, (state, action) => {
  //    state.products.push(action.payload)
  //   })
  // },

})


export default productSlice.reducer