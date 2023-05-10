import {Dispatch, useState} from "react";
import styles from './MealItemForm.module.css'
import {Input} from "../../UI/Input";
export const MealItemForm = (props: {addToCart:Dispatch<any>}) => {
    const setQuantity = (event: any) => {
            updateQuantity(() => {
                return event.target.value
        });
    }
    const [quantity, updateQuantity] = useState<number>(0)
    return <form className={styles.form}>
        <Input label="Amount" input={{
            id: 'amount',
            type: 'number',
            min: '1',
            max: '5',
            step: '1',
            defaultValue: '1'
        }}/>
        <button onClick={props.addToCart}>+ Add</button>
    </form>
}
