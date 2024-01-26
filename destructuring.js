// Object Destructuring
// 1. 8/ 1846
// 2. 1846/ 1659
// 3. 'Your name is Alejandro and you like purple/ Your name is Melissa and you like green/ Your name is undefined and you like green/

// Array Destructuring
// 1. Maya/ Marisa/ Chi
// 2. Raindrops on roses/ whiskers on kittens/ Bright copper kettles, warm woolen mittens, Brown paper packages tied up with strings
// 3. 10, 30, 20

// ES2015 Refactoring
const obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
  const {a,b} = obj.numbers

  // ES5 Array Swap
  [arr[0], arr[1]] = [arr[1], arr[0]]

  // raceResults()
  const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest})