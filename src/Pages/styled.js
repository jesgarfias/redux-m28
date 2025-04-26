import styled from "styled-components";
const ListContanier=styled.ul`
    display: flex;
    list-style: none;

`
const CartElemetContainer=styled.div`
    display: flex;
    border: solid 1px #7aa5bb;
    border-radius: 2px;
    width: 70%;
`
const ElementImgContainer=styled.div`
    width: 20%;
`
const ElementImg=styled.img`
    width: 100%;
`
export {
    ListContanier,
    CartElemetContainer,
    ElementImg,
    ElementImgContainer
}