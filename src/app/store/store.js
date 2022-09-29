import { configureStore } from '@reduxjs/toolkit'
import circleReducer from '../reducers/circleSlice'

export const store = configureStore({
  reducer: {
    allcircles: circleReducer
  },
})