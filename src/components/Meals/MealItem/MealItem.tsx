import {Meal} from "../Meal";
import {MealItemForm} from "./MealItemForm";
import {Dispatch} from "react";
import styles from './MealItem.module.css'

export const MealItem = (props: { meal: Meal, addToCart:Dispatch<any>}) => {
    return (<li className={styles.meal}>
        <div>
            <h3>
                {props.meal.getName()}
            </h3>
            <div className={styles.description}>{props.meal.getDescription()}</div>
            <div className={styles.price}>${props.meal.getPrice().toFixed(2)}</div>
            <MealItemForm addToCart={props.addToCart}></MealItemForm>
        </div>
    </li>);
}