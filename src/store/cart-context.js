import React from "react";

//Items inside the object here aren't actual for use, only for autocomplete when used in other components
const CartContext = React.createContext({
    items: "",
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
});

export default CartContext;
