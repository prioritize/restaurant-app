import styles from './Header.module.css';
import {Dispatch, Fragment, useContext} from "react";
import mealsImage from '../../assets/meals.jpg';
import {HeaderCartButton} from "./HeaderCartButton";
import {CartContext} from "../../store/cart-context";


export const Header = (props: {onShowCart: Dispatch<any>}) => {
    let cart = useContext(CartContext);
    return (
        <Fragment>
            <header className={styles.header}>
                <h1>
                    React Meals with Typescript
                </h1>
                <HeaderCartButton onShowCart={props.onShowCart} />
            </header>
            <div className={styles['main-image']}><img alt={'A table full of delicious food'} src={mealsImage}/></div>
        </Fragment>
    )
}