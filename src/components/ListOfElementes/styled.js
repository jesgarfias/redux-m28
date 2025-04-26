import styled from "styled-components";
const ProductMainContainer=styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 1rem;
    row-gap: 1rem;
`
const ProductCart=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    flex-basis: 350px;
    border: solid 2px rgb(45, 101, 105);
    border-radius: 5px;
    cursor: pointer;
`
const ImageContainer=styled.div`
    width: 95%;
`
const ImageProduct=styled.img`
    width: 90%;
    height: 90%;
`
const BtnContainer=styled.div`
    background-color: #7aa5bb;
    width: 40%;
    border-radius: 2px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.5s ease-in-out ;
`
export{
    ProductMainContainer,
    ProductCart,
    ImageContainer,
    ImageProduct, 
    BtnContainer
}