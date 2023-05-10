import {Cart} from "../components/Cart/CartClass/Cart";
import {Meal} from "../components/Meals/Meal";

describe('testing cart constructor', () => {
    test('creating a cart should have a empty map for contents', () => {
        let cart = new Cart();
        expect(cart.itemCount()).toBe(0);
    })
});
describe('testing cart -- addItemToCart', () => {
    test('inserting an item into the cart should increase the amount of items in the cart', () => {
        const cart = new Cart();
        let testMeal = new Meal('1', 1.00, 'This meal is being used for a test', 'Test Meal');
        cart.addToCart(testMeal, 1);
        expect(cart.itemCount()).toBe(1);
    });
});
describe('testing cart -- addItemToCart -- multiple items', () => {
    test('adding multiple items to the cart should update the quantity of items correctly', () => {
        let cart = new Cart();

        let testMeal = new Meal('1', 1.00, 'This meal is being used for a test', 'Test Meal');
        for (let i = 0; i < 10; i++) {
            cart.addToCart(testMeal, 1);
        }
        // cart.addToCart(testMeal, 1);
        expect(cart.itemCount()).toBe(10);
    });
});
describe('testing cart -- addItemToCart -- multiple values', () => {
    test('adding multiple items to the cart should update the quantity of items correctly', () => {
        let cart = new Cart();

        let testMeal = new Meal('1', 1.00, 'This meal is being used for a test', 'Test Meal');
        for (let i = 1; i <= 10; i++) {
            cart.addToCart(testMeal, i);
        }
        // cart.addToCart(testMeal, 1);
        expect(cart.itemCount()).toBe(55);
    });
});
describe('testing cart -- addItemToCart -- checkSubTotal', () => {
    test('adding multiple items to the cart should update the quantity of items correctly', () => {
        let cart = new Cart();

        let testMeal = new Meal('1', 1.00, 'This meal is being used for a test', 'Test Meal');
        for (let i = 1; i <= 10; i++) {
            cart.addToCart(testMeal, i);
        }
        // cart.addToCart(testMeal, 1);
        expect(cart.itemCount()).toBe(55);
        expect(cart.total()).toBe(55*testMeal.cost());
    });
});
