import {Dispatch, useContext} from "react";
import {CartContext} from "../../store/cart-context";
import {Meal} from "../Meals/Meal";
import {Modal} from "../UI/Modal";
import styles from './Cart.module.css'

const CartItem = (props: { meal: Meal, quantity: number }) => {
    return (
        <div>
            <h2>
                {props.meal.getName()}
            </h2>
            <div>
                {props.meal.getPrice()}
            </div>
            <div>
                {props.quantity}
            </div>
            <div>
                Subtotal: {props.quantity * props.meal.getPrice()}
            </div>
        </div>
    )
}
export const Cart = (props: {hideCart: Dispatch<any>} ) => {
    let cart = useContext(CartContext);
    return (
        <Modal hideCart={props.hideCart}>
            {cart.cart.total()}
            <div className={styles.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={styles.actions}>
                <button className={styles['button-alt']}>Close</button>
                <button className={styles.button}>Order</button>
            </div>
        </Modal>
    )
}