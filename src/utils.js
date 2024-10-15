/**
 * Takes a string and replaces all vowels with the letter 'x'.
 * @param {string} string - The string to hardcorize.
 * @returns {string} The hardcorized string.
*/
export const hardcorize = (string) => {
    return string.replace(/[aeiou]/gi, 'x');
};
