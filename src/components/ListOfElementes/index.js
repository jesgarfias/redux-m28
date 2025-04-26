import {useSelector} from 'react-redux'
import { ImageProduct, ProductCart, ProductMainContainer } from './styled';
import ShopBag from '../icons/ShopBag';
import './styled.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../Redux/Actions/CartActions';

const ListOfElements=()=>{
    const [isHover, setIsHover]=useState(null);
    const products=useSelector(state=>state.productState.products);
    const elementInCart=useSelector(state=>state.cartState.items)
    const totalelements=useSelector(state=>state.cartState.cartQuantity)
    const dispatch=useDispatch()
    const handleAdd=(product)=>{
        dispatch(addToCart(product));
        console.log(elementInCart);
        console.log(totalelements);
    }
    return(
        <>
         <ProductMainContainer>
            {products.map((product,index)=>(
                <ProductCart key={index} onMouseEnter={()=>setIsHover(index)} onMouseLeave={()=>setIsHover(null)}>
                    <ImageProduct src={product.image} />
                    <p>{product.name}</p>
                    <p>${product.price}</p>
                    <div className={isHover===index ?'add-btn show': 'add-btn'}>
                        <ShopBag onClick={()=>handleAdd(product)}/>
                        <button onClick={()=>handleAdd(product)}><ShopBag/></button>    
                    </div>
                </ProductCart>
            ))}
         </ProductMainContainer>
        </>
    )
}
export default ListOfElements;