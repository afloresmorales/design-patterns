import PackageFactoryExample, {  testFactoryPattern } from '../src/factory-index';

describe('Factory Example test', () => {
    it('should return the right object', () => {
        const expectedResult = {"consoleType": "PS4", "controller": "ps4 controller", "game": "ps4 COD"};
        const result = testFactoryPattern(new PackageFactoryExample(), 'PS4');
        expect(result).toEqual(expectedResult);
    });
});
