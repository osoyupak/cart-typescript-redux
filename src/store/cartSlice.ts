import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import { ICart, IProduct } from '../interface'


// Define the initial state using that type
const initialState: ICart[] = []

export const cartSlice = createSlice({
  name: 'cart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {

    addToCart: (state:ICart[], action: PayloadAction<IProduct>) => {
      const productIndex = state.findIndex(product => product.id ===action.payload.id)
      if(productIndex !==-1) {
        state[productIndex].amount +=1
      } else {
        state.push({...action.payload, amount:1})
      }
    },

    removeFromCart: (state:ICart[], action: PayloadAction<string>) => {
      const productIndex = state.findIndex(product => product.id ===action.payload);
      if(state[productIndex].amount>1) {
        state[productIndex].amount -=1;
      } else {
        state.splice(productIndex,1)
      }
    }

    
  }
})

export const { addToCart, removeFromCart} = cartSlice.actions

export const getCartSelector = (state: RootState) => state.cart
export const getTotalPrice = (state: RootState) => state.cart.reduce((acc, next)=> acc+=next.amount*next.price, 0)

export default cartSlice.reducer