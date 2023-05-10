import React, {createContext, useState} from 'react';
import {Cart} from "./components/Cart/CartClass/Cart";
import {Header} from "./components/Layout/Header";
import {Meal} from "./components/Meals/Meal";
import {Meals} from "./components/Meals/Meals";
import {Cart as CartComponent} from "./components/Cart/Cart";
import {Modal} from "./components/UI/Modal";


function App() {
    const [showCart, setShowCart] = useState(false);
    const cart = new Cart();
    const CartContext = createContext<Cart>(cart);
    const addMeal = (meal: Meal) => {
        console.log(meal)
    }
    const onShowCart = (event: MouseEvent) => {
        event.preventDefault();
        setShowCart(() => {
            return true;
        });
    }
    const onHideCart = () => {
        setShowCart(() => {
            return false;
        });
    }
    const sushi = new Meal(Math.random().toString(), 12.99, 'Get you some of this amazing raw fish straight out the ocean', 'Sushi');
    const tBone = new Meal(Math.random().toString(), 17.99, "This cut of meat is so fresh it's basically still bleeding!", "T-Bone Steak");
    const hamburger = new Meal(Math.random().toString(), 17.99, "All the pieces that we cut off the T-Bone in preparation for cooking", "Ground Beef Hamburger");
    const fries = new Meal(Math.random().toString(), 6.99, "Julienne potatoes deep-fried until perfectly golden brown", "French Fries");
    const musubi = new Meal(Math.random().toString(), 2.99, "A patty of rice, topped with perfectly crisp spam, with a drizzle of teriyaki sauce and topped with furikake", "Spam Musubi");
    let mealList = [sushi, tBone, hamburger, fries, musubi];
    return (
        <CartContext.Provider value={cart}>
            {/*{showCart ?? <Modal hideCart={onHideCart}>*/}
            {/*    <div>*/}
            {/*        <span>There are some words here</span>*/}
            {/*    </div>*/}
            {/*</Modal>}*/}
            <Header onShowCart={onShowCart}></Header>
            {/*{showCart && <div><label>{cart.itemCount()}</label></div>}*/}
            <Meals meals={mealList} addToCart={addMeal}/>
            {showCart ?? <CartComponent hideCart={onHideCart}></CartComponent>}
            {/*{mealList.map((meal) => {*/}
            {/*    return <MealItem meal={meal} addToCart={addMeal}/>*/}
            {/*})}*/}
        </CartContext.Provider>
    );
}

export default App;
