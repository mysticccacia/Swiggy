import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './cartSlicer'
import restaurantReducer from './restaurantSlice'
import restaurantMenuReducer from './restaurantMenuSlice'

export const store = configureStore({
  reducer: {
    cartSlice: counterReducer,
    restaurant: restaurantReducer,
    restaurantMenu: restaurantMenuReducer,
  },
})