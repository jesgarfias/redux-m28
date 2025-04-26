import { Link } from "react-router-dom";
import { HeaderContainer, HeaderTitleLogo } from "./styled";
import ShopBag from "../icons/ShopBag";
import { useSelector } from "react-redux";
const Header=()=>{
    const itemsInBack=useSelector(state=>state.cartState.cartQuantity);
    return(
        <HeaderContainer>
            <HeaderTitleLogo>MedicalShop</HeaderTitleLogo>
            <nav>
                <Link to="/" >Home</Link>
                <Link to="cart" ><ShopBag/></Link>
                <span>{itemsInBack}</span>
            </nav>
        </HeaderContainer>
    )
}

export default Header;