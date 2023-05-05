import {Meal} from "../Meals/Meal";

export class Cart {
    private subTotal: number;
    private contents: Map<string, [Meal, number]>;
    private cartQuantity: number;

    public total = ():number => {
        return this.subTotal
    }
    public getContents = () => {
        return this.contents
    }
    public addToCart = (meal: Meal, quantity: number) => {
        // @ts-ignore
        let entry = this.contents.get(meal.id);
        if (entry === undefined) {
            this.contents.set(meal.id, [meal, quantity]);
            this.cartQuantity = this.cartQuantity + quantity;
        } else {
            this.contents.set(meal.id, [meal, entry[1] + quantity]);
            this.cartQuantity = this.cartQuantity + quantity;
        }
        this.updateTotal();
    }
    public itemCount = (): number => {
        return this.cartQuantity;
    }

    updateTotal = () => {
        let tempTotal = 0;
        this.contents.forEach(([meal, quantity]) => {
            tempTotal += meal.cost() * quantity;
        })
        this.subTotal = tempTotal;
    }

    constructor() {
        this.subTotal = 0;
        this.contents = new Map<string, [Meal, number]>();
        this.cartQuantity = 0;
        // const testMeal = new Meal("this is an id", 12.99, 'Some very tasty sushi', 'Maguro');
        // this.addToCart(testMeal, 1);
    }
}

