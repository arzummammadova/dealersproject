import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  basket: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
   
    addtobasket: (state, action) => {
     const existingProduct=state.basket.find((product)=>product._id==action.payload._id)
     if(existingProduct){
        existingProduct.count++;
     }
     else{
        state.basket.push({...action.payload,count:1})
     }
    },

    deletefromBasket:(state,action)=>{
        state.basket=state.basket.filter((product)=>product._id!==action.payload)
    }
  },
})

export const {  addtobasket,deletefromBasket } = basketSlice.actions

export default basketSlice.reducer