"use strict";
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
exports.__esModule = true;
var Service = /** @class */ (function () {
    function Service() {
    }
    Service.prototype.requestTemperature = function () {
        return {
            temperatura: 21,
            medida: 'Celsius',
            regionStatus: 'OK'
        };
    };
    return Service;
}());
exports.Service = Service;
var Sensor = /** @class */ (function () {
    function Sensor() {
    }
    Sensor.prototype.specificRequest = function () {
        return {
            temperatura: 70,
            medida: 'Fahrenheit'
        };
    };
    return Sensor;
}());
exports.Sensor = Sensor;
var TemperatureAdapter = /** @class */ (function (_super) {
    __extends(TemperatureAdapter, _super);
    function TemperatureAdapter(sensor) {
        var _this = _super.call(this) || this;
        _this.sensor = sensor;
        return _this;
    }
    TemperatureAdapter.prototype.requestTemperature = function () {
        var sensorTemperatura = this.sensor.specificRequest();
        //(Fahrenheit − 32) × 5/9 = Celsius
        sensorTemperatura.temperatura = Math.round((sensorTemperatura.temperatura - 32) * 5 / 9);
        sensorTemperatura.medida = 'Celsius';
        return {
            temperatura: 21,
            medida: 'Celsius',
            regionStatus: 'OK'
        };
        ;
    };
    return TemperatureAdapter;
}(Service));
exports.TemperatureAdapter = TemperatureAdapter;
function clientCode(service) {
    return service.requestTemperature();
}
exports.clientCode = clientCode;
