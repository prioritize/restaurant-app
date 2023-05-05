import styles from './HeaderCartButton.module.css';
import CartIcon from "../Cart/CartIcon";
import {Dispatch} from "react";
import {Meal} from "../Meals/Meal";
export const HeaderCartButton = (props: {onShowCart: Dispatch<any>}) => {
   return (
       <button className={styles.button} onClick={props.onShowCart}>
           <span className={styles.icon}>
               <CartIcon />
           </span>
           <span>Your Cart</span>
           <span className={styles.badge}>{10}</span>
       </button>
   )
}