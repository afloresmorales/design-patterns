"use strict";
exports.__esModule = true;
var PackageFactory = /** @class */ (function () {
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
}());
exports["default"] = PackageFactory;
var PS4Package = /** @class */ (function () {
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
}());
var XboxPackage = /** @class */ (function () {
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
}());
function testFactoryStrategyPattern(factory, consoleType) {
    var product = factory.createPackage(consoleType);
    var consolePackage = product.makePackage();
    return consolePackage;
}
exports.testFactoryStrategyPattern = testFactoryStrategyPattern;
