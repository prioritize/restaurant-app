import {CartContext} from "./cart-context";
import {Cart} from "../components/Cart/Cart";

export const CartProvider = (props: any) => {
    const cart = new Cart();
    const ph = {cart: cart};
    const cartCount = (): number => {
        return cart.itemCount()
    }

    return <CartContext.Provider value={ph}>
        {props.children}
    </CartContext.Provider>;
}