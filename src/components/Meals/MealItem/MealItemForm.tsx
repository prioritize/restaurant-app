import {Dispatch, useState} from "react";
export const MealItemForm = (props: {addToCart:Dispatch<any>}) => {
    const setQuantity = (event: any) => {
            updateQuantity(() => {
                return event.target.value
        });
    }
    const [quantity, updateQuantity] = useState<number>(0)
    return <div>
        <input onChange={setQuantity} type="number"/>
        <button onClick={props.addToCart}>Add to cart</button>
    </div>
}