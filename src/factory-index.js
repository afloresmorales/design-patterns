"use strict";
exports.__esModule = true;
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
exports["default"] = PackageFactoryExample;
function testFactoryPattern(factory, consoleType) {
    var product = factory.createFactoryPackage(consoleType);
    return product;
}
exports.testFactoryPattern = testFactoryPattern;
