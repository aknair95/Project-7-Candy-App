import { useState } from "react";
import CartContext from "./cartContext";

const CartProvider=(props) =>{

    const [candys,updateCandys]=useState(props.candyDetails);      
   
    const addItemToCartHandler=(candy,Qty) =>{
        const updatedCandyDetails=candys.map((element) =>{
            if(element.name===candy.name){
                return element.qty+=Qty;        
            }
            return element;
        })
        updateCandys(updatedCandyDetails);    
    }

    const removeItemFromCartHandler=(candy,Qty) =>{
        const updatedCandyDetails=candys.map((element) =>{
            if(element.name===candy.name){
                return element.qty-=Qty;               
            }
            return element;
        })
        updateCandys(updatedCandyDetails);
    }
    const cartContext={
        candyDetails: candys,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children} 
        </CartContext.Provider>
    )
}

export default CartProvider;