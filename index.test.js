const { translate } = require('./index');

describe('translate function', () => {
    test('words starting with vowel', () => {
        let result = translate('apple');
        expect(result).toEqual('appleway');
    });
    test('words starting with w/ uppercase vowel', () => {
        let result = translate('Elephant');
        expect(result).toEqual('elephantway');
    });
    test('words starting with vowel, uppercase in word', () => {
        let result = translate('igLoo');
        expect(result).toEqual('iglooway');
    });
    test('words starting with oo', () => {
        let result = translate('oowl');
        expect(result).toEqual('oowlway');
    });
    test('word with just two vowels ee', () => {
        let result = translate('ee');
        expect(result).toEqual('eeway');
    });
    test('words starting with consonant', () => {
        let result = translate('potato');
        expect(result).toEqual('otatopay');
    });
    test('words starting with consonant followed by two vowels', () => {
        let result = translate('poem');
        expect(result).toEqual('oempay');
    });
    test('words starting with two consonants', () => {
        let result = translate('champagne');
        expect(result).toEqual('ampagnechay');
    });
    test('words starting with three consonants', () => {
        let result = translate('throat');
        expect(result).toEqual('oatthray');
    });
    test('all capped letters converted to lowercase', () => {
        let result = translate('HELLO');
        expect(result).toEqual('ellohay');
    });

})