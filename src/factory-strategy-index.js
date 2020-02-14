var PackageFactory = (function () {
    function PackageFactory() {
    }
    PackageFactory.prototype.createPackage = function (consoleType) {
        if (consoleType === 'PS4') {
            return new PS4Package();
        }
        else {
            return new XboxPackage();
        }
    };
    return PackageFactory;
})();
var PS4Package = (function () {
    function PS4Package() {
    }
    PS4Package.prototype.makePackage = function () {
        return {
            consoleType: 'PS4',
            controller: 'ps4 controller',
            game: 'ps4 COD'
        };
    };
    return PS4Package;
})();
var XboxPackage = (function () {
    function XboxPackage() {
    }
    XboxPackage.prototype.makePackage = function () {
        return {
            consoleType: 'XBOX',
            controller: 'xbox controller',
            game: 'xbox COD'
        };
    };
    return XboxPackage;
})();
function testFactoryStrategyPattern(factory, consoleType) {
    var product = factory.createPackage(consoleType);
    var consolePackage = product.makePackage();
    console.log('Console: ', consolePackage.consoleType);
    console.log('Controller: ', consolePackage.controller);
    console.log('Game: ', consolePackage.game);
}
console.log('Testing Factory Pattern: PS4');
testFactoryStrategyPattern(new PackageFactory(), 'PS4');
console.log('Testing Factory Pattern: XBOX');
testFactoryStrategyPattern(new PackageFactory(), 'Xbox');
