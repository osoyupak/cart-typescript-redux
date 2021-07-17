import { configureStore } from '@reduxjs/toolkit'
import productsSlice from './productsSlice'
import cartSlice from './cartSlice';
const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
  }
})

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch