const { translate } = require('./index');

describe('translate function', () => {
    // INPUTS -> OUTPUT
    // apple -> appleway
    test('words starting with a', () => {
        let result = translate('apple');
        expect(result).toEqual('appleway');
    });
    // Elephant -> elephatway
    test('words starting with w/ uppercase E', () => {
        let result = translate('Elephant');
        expect(result).toEqual('elephantway');
    });
    // igloo -> iglooway
    test('words starting with i', () => {
        let result = translate('igloo');
        expect(result).toEqual('iglooway');
    });
    // owl -> owlway
    test('words starting with o', () => {
        let result = translate('owl');
        expect(result).toEqual('owlway');
    });
    // ukulele -> ukuleleway
    test('words starting with u', () => {
        let result = translate('ukulele');
        expect(result).toEqual('ukuleleway');
    });
    // ukulele -> ukuleleway
    test('words starting with u', () => {
        let result = translate('pulele');
        expect(result).toEqual('ulelepay');
    });
})