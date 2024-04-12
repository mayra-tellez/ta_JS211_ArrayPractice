// 1. .length
const cars = ["ford", "chevy", "toyota", "buick"]
console.log("length of cars array:", cars.length)

// 2. .concat()
const moreCars = ["lexus", "mazda", "nissan", "honda"]
const totalCars = cars.concat(moreCars)
console.log("cars array combined with moreCars:", totalCars)

// 3. .indexOf() & .lastIndexOf()
console.log("index of honda:", totalCars.indexOf("honda"))
console.log("index of ford:", totalCars.lastIndexOf("ford"))

// 4. .join()
const stringOfCars = totalCars.join(" ")
console.log("string of cars:", stringOfCars)

// 5. .split()
const carsFromString = stringOfCars.split(" ")
console.log("cars from string:", carsFromString)

// 6. .reverse()
const carsInReverse = totalCars.reverse()
console.log("cars in reverse:", carsInReverse)

// 7. .sort()
carsInReverse.sort()
console.log("index of buick in sorted cars array", carsInReverse.indexOf("buick"))

// 8. .slice()
const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']
const reptiles = pets.slice(4, 6)
console.log("reptiles array:", reptiles)
console.log("pets array:", pets)

// 9. .splice()
const removedReptiles = pets.splice()

// * Create a new array called `removedReptiles`, using the `splice` method to remove `snake` and `lizard` from the `pets` array.
// * Console.log `removedReptiles` and `pets` and run the program.
// * Go back and add the string `'hamster'` in as a third parameter to your `splice` method, then run the program again and notice how the `pets` array has changed. Do you see how that works?

