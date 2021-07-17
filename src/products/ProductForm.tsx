import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { IProduct } from '../interface';
import { addProduct } from '../store/productsSlice';

const ProductForm = () => {
    const dispatch = useDispatch();
    const [product, setProduct] = useState<IProduct>({title: "", price:0, id:""});

    const handleOnChange:React.ChangeEventHandler<HTMLInputElement>= ({target}):void => {
        const newProduct:any = {...product};
        const name = target.name; 
        const value = target.value; 
        newProduct[name] = value;
        setProduct(newProduct)
    }

    const handleOnSubmit = (e:any)=> {
        e.preventDefault();
        dispatch(addProduct(product));
        console.log(product)
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input type="text" placeholder="Mama Name" name="title" value={product?.title} onChange={handleOnChange}/>
                <input type="number" placeholder="Price" name="price" value={product?.price} onChange={handleOnChange}/>
                <input type="id" placeholder="ID" name="id" value={product?.id} onChange={handleOnChange}/>
                <button>Add</button>
            </form>
        </div>
    )
}

export default ProductForm;
