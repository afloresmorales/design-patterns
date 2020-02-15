interface Temperature {
    temperatura: number,
    medida: string,
}
class Target {
    public requestTemperature(): string{
        return `esta es la temperatura perfecta: 35 Celsius`;
    }
}
class Adaptee {
    public specificRequest(): Temperature {
        return {
            temperatura: 95,
            medida: 'Fahrenheit'
        };
    }
}
class Adapter extends Target{
    private adaptee: Adaptee;
    constructor(adaptee: Adaptee){
        super();
        this.adaptee = adaptee;
    }
    public requestTemperature(): string {
        const adapteeTemperatura = this.adaptee.specificRequest();
        //(Fahrenheit − 32) × 5/9 = Celsius
        adapteeTemperatura.temperatura = (adapteeTemperatura.temperatura - 32) * 5/9;
        adapteeTemperatura.medida = 'Celsius';
        return `esta es la temperatura perfecta: ${adapteeTemperatura.temperatura} ${adapteeTemperatura.medida}`;
    }
}
function clientCode(target: Target) {
    console.log(target.requestTemperature());
}

console.log('Client: I can work just fine with the Target objects:');
const target = new Target();
const temperaturaObject = {
    temperatura: 35,
    medida: 'Celsius'
}
clientCode(target);

console.log('');

const adaptee = new Adaptee();
console.log('Client: The Adaptee class has a weird interface. See, I don\'t understand it:');
const adapteeTemperatura = adaptee.specificRequest();
console.log(`Adaptee: ${adapteeTemperatura.temperatura} ${adapteeTemperatura.medida}`);

console.log('');

console.log('Client: But I can work with it via the Adapter:');
const adapter = new Adapter(adaptee);
clientCode(adapter);