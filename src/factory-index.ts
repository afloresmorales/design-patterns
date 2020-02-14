interface AbstractPlainFactory {
    createFactoryPackage(consoleType: string): FactoryObject;
}
interface FactoryObject {
    consoleType: string,
    controller: string,
    game: string
}
class PackageFactoryExample implements AbstractPlainFactory{
    public createFactoryPackage(consoleType: string): FactoryObject {
        if (consoleType === 'PS4'){
            return {
                consoleType,
                controller: 'ps4 controller',
                game: 'ps4 COD'
            };
        } else {
            return {
                consoleType,
                controller: 'xbox controller',
                game: 'xbox COD'
            };
        }
    }
}
function testFactoryPattern(factory: AbstractPlainFactory, consoleType: string){
    const product = factory.createFactoryPackage(consoleType);
    console.log('Console: ', product.consoleType);
    console.log('Controller: ', product.controller);
    console.log('Game: ', product.game);    
}

console.log('Testing Factory Pattern: PS4');
testFactoryPattern(new PackageFactoryExample(), 'PS4');
console.log('Testing Factory Pattern: XBOX');
testFactoryPattern(new PackageFactoryExample(), 'Xbox');

