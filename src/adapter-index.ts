interface Temperature {
    temperatura: number,
    medida: string,
}
interface CelsiusTemperature {
    temperatura: number,
    medida: string,
    regionStatus: string
}
class Service {
    public requestTemperature(): CelsiusTemperature{
        return {
            temperatura: 21,
            medida: 'Celsius',
            regionStatus: 'OK'
        };
    }
}
class Sensor {
    public specificRequest(): Temperature {
        return {
            temperatura: 70,
            medida: 'Fahrenheit'
        };
    }
}
class TemperatureAdapter extends Service{
    private sensor: Sensor;
    constructor(sensor: Sensor){
        super();
        this.sensor = sensor;
    }
    public requestTemperature(): CelsiusTemperature {
        const sensorTemperatura = this.sensor.specificRequest();
        //(Fahrenheit − 32) × 5/9 = Celsius
        sensorTemperatura.temperatura = Math.round((sensorTemperatura.temperatura - 32) * 5/9);
        sensorTemperatura.medida = 'Celsius';
        return  {
            temperatura: 21,
            medida: 'Celsius',
            regionStatus: 'OK'
        };;
    }
}
function clientCode(service: Service) {
    return service.requestTemperature();
}

export {TemperatureAdapter, Sensor, Service, clientCode};