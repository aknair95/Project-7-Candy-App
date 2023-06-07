import React from "react";

const CartContext= React.createContext({
    candyDetails: [],
    addItem: (name,qty) =>{},
    removeItem: (name,qty) =>{}
})

export default CartContext;