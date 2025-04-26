const initialCartState={
    items:[],
    cartQuantity:0,
    cartAmount:0
}

const cartReducer=(state=initialCartState,action)=>{
    switch(action.type){
        case'ADD_CART':return{
            ...state,
            items:[...state.items,action.payload],
            cartQuantity:state.cartQuantity + 1,
        }
        case 'DELETE_ITEM':return{
            ...state,
            items:state.items.filter(item=>item.id !== action.payload),
            cartQuantity:state.cartQuantity -1,
        }
        default: return state;
    }
}
export default cartReducer;