var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Target = /** @class */ (function () {
    function Target() {
    }
    Target.prototype.requestTemperature = function () {
        return "esta es la temperatura perfecta: 35 Celsius";
    };
    return Target;
}());
var Adaptee = /** @class */ (function () {
    function Adaptee() {
    }
    Adaptee.prototype.specificRequest = function () {
        return {
            temperatura: 95,
            medida: 'Fahrenheit'
        };
    };
    return Adaptee;
}());
var Adapter = /** @class */ (function (_super) {
    __extends(Adapter, _super);
    function Adapter(adaptee) {
        var _this = _super.call(this) || this;
        _this.adaptee = adaptee;
        return _this;
    }
    Adapter.prototype.requestTemperature = function () {
        var adapteeTemperatura = this.adaptee.specificRequest();
        //(Fahrenheit − 32) × 5/9 = Celsius
        adapteeTemperatura.temperatura = (adapteeTemperatura.temperatura - 32) * 5 / 9;
        adapteeTemperatura.medida = 'Celsius';
        return "esta es la temperatura perfecta: " + adapteeTemperatura.temperatura + " " + adapteeTemperatura.medida;
    };
    return Adapter;
}(Target));
function clientCode(target) {
    console.log(target.requestTemperature());
}
console.log('Client: I can work just fine with the Target objects:');
var target = new Target();
var temperaturaObject = {
    temperatura: 35,
    medida: 'Celsius'
};
clientCode(target);
console.log('');
var adaptee = new Adaptee();
console.log('Client: The Adaptee class has a weird interface. See, I don\'t understand it:');
var adapteeTemperatura = adaptee.specificRequest();
console.log("Adaptee: " + adapteeTemperatura.temperatura + " " + adapteeTemperatura.medida);
console.log('');
console.log('Client: But I can work with it via the Adapter:');
var adapter = new Adapter(adaptee);
clientCode(adapter);
