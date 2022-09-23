import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass'))
            .toBe('someClass');
    });

    test('with additional class', () => {
        const expected = 'someClass class1 class2';
        expect(classNames('someClass', {}, ['class1', 'class2']))
            .toBe(expected);
    });

    test('with mods', () => {
        const expected = 'someClass hovered scrollable class1 class2';
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: true },
            ['class1', 'class2'],
        ))
            .toBe(expected);
    });

    test('with undefined mod', () => {
        const expected = 'someClass hovered class1 class2';
        expect(classNames(
            'someClass',
            { hovered: true, focused: undefined },
            ['class1', 'class2'],
        ))
            .toBe(expected);
    });
});
