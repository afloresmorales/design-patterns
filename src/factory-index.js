"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PackageFactoryExample = /** @class */ (function () {
    function PackageFactoryExample() {
    }
    PackageFactoryExample.prototype.createFactoryPackage = function (consoleType) {
        if (consoleType === 'PS4') {
            return {
                consoleType: consoleType,
                controller: 'ps4 controller',
                game: 'ps4 COD'
            };
        }
        else {
            return {
                consoleType: consoleType,
                controller: 'xbox controller',
                game: 'xbox COD'
            };
        }
    };
    return PackageFactoryExample;
}());
exports.default = PackageFactoryExample;
function testFactoryPattern(factory, consoleType) {
    var product = factory.createFactoryPackage(consoleType);
    return product;
}
exports.testFactoryPattern = testFactoryPattern;
console.log('Testing Factory Pattern: PS4');
testFactoryPattern(new PackageFactoryExample(), 'PS4');
console.log('Testing Factory Pattern: XBOX');
testFactoryPattern(new PackageFactoryExample(), 'Xbox');
