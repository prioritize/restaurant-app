import {Meal} from "./Meal";
import {MealsSummary} from "./MealsSummary";
import {AvailableMeals} from "./AvailableMeals";
import {Dispatch, Fragment} from "react";
export const Meals = (props: {meals: Meal[], addToCart: Dispatch<any>}) => {
    return (<Fragment>
        <MealsSummary/>
        <AvailableMeals meals={props.meals} addToCart={props.addToCart}/>
    </Fragment>);
    
}