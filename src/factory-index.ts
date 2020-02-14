interface AbstractFactory {
    createController(): AbstractControllerProduct;
    createConsole(): AbstractConsoleProduct;
}
interface AbstractControllerProduct {
    makeController() : void;
}
interface AbstractConsoleProduct {
    makeConsole() : void;
}

class PS4Factory implements AbstractFactory{
    public createController():AbstractControllerProduct {
        return new PS4Controller();
    }
    public createConsole():AbstractConsoleProduct {
        return new PS4Console();
    }
}
class XboxFactory implements AbstractFactory {
    public createController():AbstractControllerProduct {
        return new XboxController();
    }
    public createConsole():AbstractConsoleProduct {
        return new XboxConsole();
    }
}
class PS4Controller implements AbstractControllerProduct{
    public makeController():void {
        console.log('making ps4 controller');
    }
}
class PS4Console implements AbstractConsoleProduct{
    public makeConsole():void {
        console.log('making ps4 console');
    }
}
class XboxController implements AbstractControllerProduct{
    public makeController():void {
        console.log('making Xbox controller');
    }
}
class XboxConsole implements AbstractConsoleProduct{
    public makeConsole(): void {
        console.log('making Xbox Console');
    }
}
function testFactoryPattern(factory: AbstractFactory){
    const controller = factory.createController();
    const consola = factory.createConsole();
    controller.makeController();
    consola.makeConsole();
}

console.log('Testing Factory Pattern: ');
testFactoryPattern(new PS4Factory());

