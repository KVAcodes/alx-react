import utils from './utils';

const { getFullYear, getFooterCopy, getLatestNotification } = utils;


describe('getFullYear', () => {
    test('returns the current year', () => {
        const currentYear = (new Date()).getFullYear();
        expect(getFullYear()).toBe(currentYear);
    });
});

describe('getFooterCopy', () => {
    test('returns "Holberton School" for index', () => {
        expect(getFooterCopy(true)).toBe('Holberton School');
    });

    test('returns "Holberton School main dashboard" for non-index', () => {
        expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
    });
});

describe('getLatestNotification', () => {
    test('returns a string', () => {
        expect(typeof getLatestNotification()).toBe('string');
    });
});