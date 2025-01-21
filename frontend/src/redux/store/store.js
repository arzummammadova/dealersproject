import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import productReducer from '../features/productSlice.js'
import basketRdeucer from '../features/basketSlice.js'
import wishlistReducer from '../features/wishlistSlice.js'

const persistwishlistConfig = {
  key: 'wishlist',
  storage,
}
const persistbasketConfig = {
  key: 'wishlist',
  storage,
}
const persistedwishlistReducer = persistReducer(persistwishlistConfig, wishlistReducer)
const persistedbasketReducer = persistReducer(persistbasketConfig,basketRdeucer)
export const store = configureStore({
  reducer: {
    products:productReducer,
    basket:persistedbasketReducer,
    wishlist:persistedwishlistReducer 
  },
})

export const persistor = persistStore(store)
export default store

