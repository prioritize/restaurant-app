import {Meal} from "./Meal";
import {MealItem} from "./MealItem/MealItem";
import {Dispatch} from "react";
import styles from './AvailableMeals.module.css';
import {Card} from "../UI/Card";

export const AvailableMeals = (props: { meals: Meal[], addToCart: Dispatch<any> }) => {

    return (
        <section className={styles.meals}>
            <Card>
                <ul>
                    {
                        props.meals.map((meal) => {
                            return <MealItem meal={meal} addToCart={props.addToCart}></MealItem>;
                        })
                    }
                </ul>
            </Card>
        </section>);
}
