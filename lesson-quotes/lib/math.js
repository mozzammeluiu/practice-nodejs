/**
 * generating a random number
 */

const math = {};

math.generateRandomNumber = (min, max) => {
  let minimum = min;
  let maximum = max;
  minimum = typeof minimum === "number" ? minimum : 0;
  maximum = typeof maximum === "number" ? maximum : 0;
  return Math.floor(Math.random() * (maximum - minimum + 1) + min)
};

// Export the library
module.exports = math;