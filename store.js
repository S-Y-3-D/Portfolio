import { configureStore } from '@reduxjs/toolkit'
import switchReducer from './src/features/dark/darkSlice' 

export const store = configureStore({
  reducer: {
    switch: switchReducer
  },

})