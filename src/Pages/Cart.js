import Header from "../components/Header"
import { useSelector, useDispatch } from "react-redux";
import DeleteBtn from "../components/icons/DeleteBtn";
import { deleteItem } from "../components/Redux/Actions/CartActions";
import { CartElemetContainer, ElementImg, ElementImgContainer, ListContanier } from "./styled";
const Cart=()=>{
    const elementCart=useSelector(state=>state.cartState.items);
    const deleteDispatch=useDispatch() 
    
    const handleDelete=(id)=>{   
        deleteDispatch(deleteItem(id))
    }
    return(
        <>
            <Header/>
            {elementCart.length===0? <p>carrito vacio</p>:
             <div>
                {elementCart.map(element=>(
                    <>
                        <div style={{width:'70%'}}>
                            <ListContanier>
                                <li>Producto</li>
                                <li>Precio</li>
                            </ListContanier>
                        </div>
                        <CartElemetContainer>
                            <div style={{display:'flex'}}>
                                <ElementImgContainer>
                                    <ElementImg src={element.image}/>
                                </ElementImgContainer>
                                <p>{element.name}</p>
                            </div>
                            <span>${element.price}</span>
                            <div>
                                <button onClick={()=>handleDelete(element.id)}><DeleteBtn/></button>
                            </div>
                        </CartElemetContainer>
                    </>
                ))}
             </div>
            
            }
        </>
    )
}
export default Cart;