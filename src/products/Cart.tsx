import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {getCartSelector, getTotalPrice} from '../store/cartSlice'
import {removeFromCart} from '../store/cartSlice'

const Cart = () => {
    const cart = useSelector(getCartSelector);
    const totalPrice = useSelector(getTotalPrice);
    const dispatch = useDispatch();
    const handleDecreaseOne = (id:string) => {
        dispatch(removeFromCart(id))
    }

    return (
        <div>
            <h2>Cart</h2>
            <h4>Total Price: {totalPrice}</h4>
            {cart.map((product)=> <div key={product.id}>
                {product.title} - {product.amount} - {product.price}
                <button onClick={()=> handleDecreaseOne(product.id)}>Decrease One</button> 
            </div>
            
            )}
        </div>
    )
}

export default Cart
