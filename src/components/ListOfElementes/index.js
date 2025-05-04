import {useSelector} from 'react-redux'
import { BtnCart, BtnContainer, ImageProduct, ProductCart, ProductMainContainer } from './styled';
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
            {products.map((product,index)=>{
                const quantity=elementInCart[product.id]?.quantity||0;
                return(
                    <ProductCart key={index} onMouseEnter={()=>setIsHover(index)} onMouseLeave={()=>setIsHover(null)}>
                        <ImageProduct src={product.image} />
                        <p>{product.name}</p>
                        <p>${product.price}</p>
                        <BtnContainer className={isHover===index ?'add-btn show': 'add-btn'}>
                            <BtnCart onClick={()=>handleAdd(product)}><ShopBag/></BtnCart>    
                        </BtnContainer>
                    </ProductCart>
                )
            })}
         </ProductMainContainer>
        </>
    )
}
export default ListOfElements;