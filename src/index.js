var Context = /** @class */ (function () {
    function Context(strategy) {
        this.coffeeStrategy = strategy;
    }
    Context.prototype.setCoffeeStrategy = function (strategy) {
        this.coffeeStrategy = strategy;
    };
    Context.prototype.makeCoffeeBeverage = function () {
        console.log('Context: Making a coffee beverage');
        this.coffeeStrategy.prepareCoffee();
    };
    return Context;
}());
var Cappuccino = /** @class */ (function () {
    function Cappuccino() {
    }
    /**
     * prepareCoffee
     */
    Cappuccino.prototype.prepareCoffee = function () {
        console.log('Making Cappuccino');
        console.log('Cappuccino is ready');
    };
    return Cappuccino;
}());
var Latte = /** @class */ (function () {
    function Latte() {
    }
    Latte.prototype.prepareCoffee = function () {
        console.log('Making Latte');
        console.log('Latte is ready');
    };
    return Latte;
}());
/*
    The client provides the strategy, and passes it to the context.
*/
var context = new Context(new Cappuccino());
console.log('Client: Make Cappuccino');
context.makeCoffeeBeverage();
context.setCoffeeStrategy(new Latte());
console.log('Client: Make Latte');
context.makeCoffeeBeverage();
