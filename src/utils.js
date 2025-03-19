/**
 * Takes a string and replaces all vowels with the letter 'x'.
 * @param {string} string - The string to hardcorize.
 * @returns {string} The hardcorized string.
*/
export const hardcorize = (string) => {
    return string.replace(/[aeiou]/gi, 'x');
};

/**
 * Shuffles an array using the Fisher-Yates algorithm.
 * @param {Array} array - The array to shuffle.
 * @returns {Array} The shuffled array.
*/
export const shuffleArray = (array) => {
  let shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
