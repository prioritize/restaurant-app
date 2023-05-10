import React from "react";
import {Cart} from "../components/Cart/CartClass/Cart";
export const CartContext = React.createContext({
    cart: new Cart()
})
