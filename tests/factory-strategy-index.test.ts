import PackageFactoryExample, {  testFactoryStrategyPattern } from '../src/factory-strategy-index';

describe('Factory + Strategy Example test', () => {
    it('should return the right object', () => {
        const expectedResult = {"consoleType": "XBOX", "controller": "xbox controller", "game": "xbox COD"};
        const result = testFactoryStrategyPattern(new PackageFactoryExample(), 'XBOX');
        expect(result).toEqual(expectedResult);
    });
});
