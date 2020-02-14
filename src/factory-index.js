var PS4Factory = (function () {
    function PS4Factory() {
    }
    PS4Factory.prototype.createController = function () {
        return new PS4Controller();
    };
    PS4Factory.prototype.createConsole = function () {
        return new PS4Console();
    };
    return PS4Factory;
})();
var XboxFactory = (function () {
    function XboxFactory() {
    }
    XboxFactory.prototype.createController = function () {
        return new XboxController();
    };
    XboxFactory.prototype.createConsole = function () {
        return new XboxConsole();
    };
    return XboxFactory;
})();
var PS4Controller = (function () {
    function PS4Controller() {
    }
    PS4Controller.prototype.makeController = function () {
        console.log('making ps4 controller');
    };
    return PS4Controller;
})();
var PS4Console = (function () {
    function PS4Console() {
    }
    PS4Console.prototype.makeConsole = function () {
        console.log('making ps4 console');
    };
    return PS4Console;
})();
var XboxController = (function () {
    function XboxController() {
    }
    XboxController.prototype.makeController = function () {
        console.log('making Xbox controller');
    };
    return XboxController;
})();
var XboxConsole = (function () {
    function XboxConsole() {
    }
    XboxConsole.prototype.makeConsole = function () {
        console.log('making Xbox Console');
    };
    return XboxConsole;
})();
function testFactoryPattern(factory) {
    var controller = factory.createController();
    var consola = factory.createConsole();
    controller.makeController();
    consola.makeConsole();
}
console.log('Testing Factory Pattern: ');
testFactoryPattern(new PS4Factory());
// export = PS4Factory;
