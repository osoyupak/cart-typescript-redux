import { useDispatch, useSelector } from 'react-redux'
import { getProductsSelector } from '../store/productsSlice'
import { removeProduct } from '../store/productsSlice'
import { addToCart } from '../store/cartSlice'
import { IProduct } from '../interface'
const ProductList = () => {
    const products = useSelector(getProductsSelector)
    const dispatch = useDispatch();

    const handleRemove = (id:string) => {
        dispatch(removeProduct(id))
    }

    const handleAddToCart = (product:IProduct) => {
        dispatch(addToCart(product))
    }

    return (
        <div>
            {products.map((product)=>
                <div key={product.id}>
                    {product.title}: {product.price}
                    <button onClick={()=>handleAddToCart(product)}>Add to cart</button>
                    <button onClick={()=>handleRemove(product.id)}>Remove Item</button>
                </div>)
            }
        </div>
    )
}

export default ProductList
