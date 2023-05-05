export class Meal {
    public id: string;
    private price: number;
    private description: string;
    private name: string;


    constructor(id: string,
                price: number,
                description: string,
                name: string) {
        this.id = id;
        this.price = price;
        this.description = description;
        this.name = name;
    }

    public cost = (): number => {
        return this.price;
    }
    public getName = ():string => {
        return this.name;
    }
    public getDescription = ():string => {
        return this.description;
    }
    public getPrice= ():number => {
        return this.price;
    }
}