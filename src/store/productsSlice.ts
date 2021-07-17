import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { IProduct } from '../interface'


// Define the initial state using that type
const initialState: IProduct[] = [
    {title: "Proplan", price: 411, id: "pp"},
    {title: "Friskies", price: 250, id: "fs"},
    {title: "Acana", price: 500, id:"ac"}
]

export const productsSlice = createSlice({
  name: 'products',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {

    addProduct: (state, action: PayloadAction<IProduct>) => {
      return state = [...state, action.payload]
    },

    removeProduct: (state, action: PayloadAction<string>) => {
      const newState = state.filter(product=> product.id!==action.payload);
      return state = [...newState];
    }
  }
})

export const { addProduct, removeProduct } = productsSlice.actions

export const getProductsSelector = (state: RootState) => state.products

export default productsSlice.reducer