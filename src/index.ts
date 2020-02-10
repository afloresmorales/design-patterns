class Context {
    private coffeeStrategy: CoffeeStrategy

    constructor(strategy: CoffeeStrategy){
        this.coffeeStrategy = strategy;
    }
    public setCoffeeStrategy(strategy: CoffeeStrategy){
        this.coffeeStrategy = strategy;
    }
    public makeCoffeeBeverage(): void {
        console.log('Context: Making a coffee beverage');
        this.coffeeStrategy.prepareCoffee();
    }
}
interface CoffeeStrategy {
    /**
     * prepareCoffee will be the method that all classes will have in common.
     */
    prepareCoffee(): void;
}

class Cappuccino implements CoffeeStrategy {
    /**
     * prepareCoffee
     */
    public prepareCoffee(): void {
        console.log('Making Cappuccino');
        console.log('Cappuccino is ready');
    }
}
class Latte implements CoffeeStrategy {
    public prepareCoffee(): void {
        console.log('Making Latte');
        console.log('Latte is ready');
    }
}
/*
    The client provides the strategy, and passes it to the context. 
*/
const context = new Context(new Cappuccino());
console.log('Client: Make Cappuccino');
context.makeCoffeeBeverage();

context.setCoffeeStrategy(new Latte());
console.log('Client: Make Latte');
context.makeCoffeeBeverage();