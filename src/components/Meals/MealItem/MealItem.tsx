import {Meal} from "../Meal";
import {MealItemForm} from "./MealItemForm";
import {Dispatch} from "react";

export const MealItem = (props: { meal: Meal, addToCart:Dispatch<any>}) => {
    return (<li>
        <div>
            <h3>
                {props.meal.getName()}
            </h3>
            <div>{props.meal.getDescription()}</div>
            <div>{props.meal.getPrice()}</div>
            <MealItemForm addToCart={props.addToCart}></MealItemForm>
        </div>
    </li>);
}