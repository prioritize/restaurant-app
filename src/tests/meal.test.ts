import {Meal} from "../components/Meals/Meal";

describe('testing Meal constructor', () => {
    test('Creating a Meal value should result in a meal being created', () => {
        const meal = new Meal('1', 12.99, 'this is a test meal', 'Test Meal');
        expect(meal.id).toBe('1');
    });
});
describe('testing Meal constructor -- should fail', () => {
    test('Creating a Meal with an id of 1 should not have a value of two', () => {
        const meal = new Meal('1', 12.99, 'this is a test meal', 'Test Meal');
        expect(meal.id).toBe('2');
    });
});
