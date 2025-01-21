import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  wishlist: [],
}

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    
    addandremove: (state, action) => {

        const existingProduct=state.wishlist.find((product)=>product._id==action.payload._id)
        if(existingProduct){

            state.wishlist=state.wishlist.filter((product)=>product._id!==action.payload._id)

        }
        else{
            state.wishlist.push(action.payload)
        }
      
    },

    deletewishlist:(state,action)=>{
        state.wishlist=state.wishlist.filter((product)=>product._id!==action.payload)
    }
  },
})

export const { addandremove,deletewishlist} = wishlistSlice.actions

export default wishlistSlice.reducer