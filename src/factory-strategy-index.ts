interface AbstractFactory {
    createPackage(consoleType: String): AbstractPackageProductStrategy;
}
interface AbstractPackageProductStrategy {
    makePackage() : ConsolePackage;
}
interface ConsolePackage {
    consoleType: string,
    controller: string,
    game: string
}

 export default class PackageFactory implements AbstractFactory{
    public createPackage(consoleType: String):AbstractPackageProductStrategy {
        if (consoleType === 'PS4'){
            return new PS4Package();
        } else {
            return new XboxPackage();
        }
    }
}
class PS4Package implements AbstractPackageProductStrategy{
    public makePackage(): ConsolePackage {
        return {
            consoleType: 'PS4',
            controller: 'ps4 controller',
            game: 'ps4 COD'
        };
    }
}
class XboxPackage implements AbstractPackageProductStrategy{
    public makePackage():ConsolePackage {
        return {
            consoleType: 'XBOX',
            controller: 'xbox controller',
            game: 'xbox COD'
        };
    }
}
export function testFactoryStrategyPattern(factory: AbstractFactory, consoleType: String){
    const product = factory.createPackage(consoleType);
    const consolePackage = product.makePackage();
    return consolePackage;    
}


