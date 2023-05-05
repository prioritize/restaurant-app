import React, {createContext, Fragment, useContext, useState} from 'react';
import {Cart} from "./components/Cart/Cart";
import {Header} from "./components/Layout/Header";
import {Meal} from "./components/Meals/Meal";
import {MealItem} from "./components/Meals/MealItem/MealItem";


function App() {
    const [showCart, setShowCart] = useState(true);
    const cart = new Cart();
    const CartContext = createContext<Cart>(cart);
    const addMeal = (meal: Meal) => {
        console.log(meal)
    }
    const makeAlert = () => {
        console.log('alert');
    }
    const sushi = new Meal(Math.random().toString(), 12.99, 'Get you some of this amazing raw fish straight out the ocean', 'Sushi');
    const tBone = new Meal(Math.random().toString(), 17.99, "This cut of meat is so fresh it's basically still bleeding!", "T-Bone Steak");
    const hamburger = new Meal(Math.random().toString(), 17.99, "All the pieces that we cut off the T-Bone in preparation for cooking", "Ground Beef Hamburger");
    const fries = new Meal(Math.random().toString(), 6.99, "Julienne potatoes deep-fried until perfectly golden brown", "French Fries");
    const musubi= new Meal(Math.random().toString(), 2.99, "A patty of rice, topped with perfectly crisp spam, with a drizzle of teriyaki sauce and topped with furikake", "Spam Musubi");
    let mealList = [sushi, tBone, hamburger, fries, musubi];
    return (
        <CartContext.Provider value={cart}>
            <Header onShowCart={makeAlert} ></Header>
            {showCart && <div><label>{cart.itemCount()}</label></div>}
            {mealList.map((meal) => {
                return <MealItem meal={meal} addToCart={addMeal}/>
            })}
        </CartContext.Provider>
    );
}

export default App;
