interface AbstractPlainFactory {
    createFactoryPackage(consoleType: string): ConsolePackage;
}
interface ConsolePackage {
    consoleType: string,
    controller: string,
    game: string
}
export default class PackageFactoryExample implements AbstractPlainFactory{
    public createFactoryPackage(consoleType: string): ConsolePackage {
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
export function testFactoryPattern(factory: AbstractPlainFactory, consoleType: string){
    const product = factory.createFactoryPackage(consoleType);   
    return product;
}
