import { Service, Sensor, TemperatureAdapter, clientCode } from "../src/adapter-index";
describe('Adapter Example test', () => {
    const service = new Service();
    it('should return the right temperature', () => {
        const result = clientCode(service);
        expect(result).toEqual({
            temperatura: 21,
            medida: 'Celsius',
            regionStatus: 'OK'
        });
    });
    it('sensor should return the right temperature in Fahrenheit and it is not compatible with', () => {
        const sensor = new Sensor();
        const sensorTemperatura = sensor.specificRequest();
        expect(sensorTemperatura).toEqual({"medida": "Fahrenheit", "temperatura": 70});
    });
    it('Adapter should return the right temperature in Celsius to be used', () => {
        const sensor =  new Sensor();
        const adapter = new TemperatureAdapter(sensor);
        const result = clientCode(adapter);
        expect(result).toEqual({
            temperatura: 21,
            medida: 'Celsius',
            regionStatus: 'OK'
        });
    });
});
