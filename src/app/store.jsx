import { configureStore } from '@reduxjs/toolkit'
import DarkSlice from '../containers/darkmode/Darkslice'

export const store = configureStore({
  reducer: {
    dark: DarkSlice,
  },
})