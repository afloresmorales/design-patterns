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
        console.log('Cappuccino does include milk');
        console.log('Cappuccino is ready');
    };
    return Cappuccino;
}());
var Latte = /** @class */ (function () {
    function Latte() {
    }
    Latte.prototype.prepareCoffee = function () {
        console.log('Making Latte');
        console.log('Latte does include milk');
        console.log('Latte is ready');
    };
    return Latte;
}());
var BlackCoffee = /** @class */ (function () {
    function BlackCoffee() {
    }
    BlackCoffee.prototype.prepareCoffee = function () {
        console.log('Making Black Coffee');
        console.log('Black coffee does not include milk');
        console.log('Black Coffee is ready');
    };
    return BlackCoffee;
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
context.setCoffeeStrategy(new BlackCoffee());
console.log('Client: Make Black Coffee');
context.makeCoffeeBeverage();
