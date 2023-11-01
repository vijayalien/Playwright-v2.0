let myArray=[]
let numbers = [1,2,3,4,5,6]
let fruits=["apple","banana","kiwi","Avocado","Melon"]
console.log(fruits)

//Push
// fruits.push("Avocado","test")
// console.log(fruits)


// //pop
// numbers.pop()
// console.log(numbers)

// //shift
// let val=numbers.shift()
// console.log(val)
// console.log(numbers)


// //unshift
// let test=fruits.unshift("melon")
// console.log(test)
// console.log(fruits)

// for(const item of fruits){
//     console.log(item)
// }

//map, filter, reduce, concat, slice and splice
// map:

// Description: The map method creates a new array by applying a function to each element in the original array. It doesn't change the original array.
const upperCaseFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperCaseFruits)
// upperCaseFruits will be: ["APPLE", "BANANA", "KIWI", "AVOCADO", "MELON"]

// filter:
// Description: The filter method creates a new array with all elements that pass a test (provided as a function).
const longFruits = fruits.filter(fruit => fruit.length > 5);
console.log(longFruits)
// longFruits will be: ["banana", "avocado"]

// reduce:
// Description: The reduce method applies a function to an accumulator and each element in the array (from left to right) to reduce it to a single value.
const totalLength = fruits.reduce((acc, fruit) => acc + fruit.length, 0);
console.log(totalLength)
// totalLength will be: 25 (sum of lengths of all fruits)

// concat:
// Description: The concat method is used to merge two or more arrays. It doesn't modify the original arrays, but instead returns a new array.
const moreFruits = ["pineapple", "grape"];
const combinedFruits = fruits.concat(moreFruits);
console.log(combinedFruits)
// combinedFruits will be: ["apple", "banana", "kiwi", "avocado", "melon", "pineapple", "grape"]

// slice:
// Description: The slice method extracts a section of an array and returns a new array. It doesn't modify the original array.
// Example:
const selectedFruits = fruits.slice(1, 4);
console.log(selectedFruits)
// selectedFruits will be: ["banana", "kiwi", "avocado"]

// splice:
// Description: The splice method can be used to add or remove elements from an array. It modifies the original array.
const removedFruits = fruits.splice(1, 2);
console.log(removedFruits)
// fruits will be: ["apple", "avocado", "melon"]
// removedFruits will be: ["banana", "kiwi"]

console.log(fruits)