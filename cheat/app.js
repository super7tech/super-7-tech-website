// Try catch
console.log('Try catch:');
try {
  const a = 1000;
  throw 'Too Big';
} catch(err) {
  console.log(err)
}

// Filter
console.log('Filter array:');
var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter(word => word.length > 6);
console.log(result);

// Map array
console.log('Map array:');
const data = [1, 2, 3, 4];
const mappedData = data.map(value => ({value: value}));
console.log(data);
console.log(mappedData);

// Reduce array [add up values]
console.log('Reduce array:');
const reducedData = data.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(reducedData);

// Loops
console.log('Loop [forEach]:');
data.forEach(value => console.log(value));

// Pop
console.log('Pop:');
const lastElement = data.pop(); // removes and returns the last element
console.log(lastElement);

// Push
console.log('Push:');
const arrayLength = data.push(4, 5, 6); // adds to end and returns array length
console.log(arrayLength);
console.log(data);

// Find
console.log('Find:');
const foundItem = data.find(value => value > 3); // returns the value of the first element in the array that satisfies the provided testing function
console.log(foundItem);

// IndexOf
console.log('indexOf:');
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
const indexOf = beasts.indexOf('camel');
console.log(indexOf);

// Sort
console.log('Sort:');
const items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 }
];

// sort by value
const sortedItems = items.sort(function (a, b) {
  return a.value - b.value; // asc
  // return b.value - a.value; // desc
});
console.log(sortedItems);


// Splice - changes the contents of an array by removing existing elements and/or adding new elements.
console.log('Splice:');
let months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb'); // inserts at 1st index position
console.log(months); // expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']

months.splice(4, 1, 'May'); // replaces 1 element at 4th index
console.log(months); // expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']

// toString - method returns a string representing the specified array and its elements.
console.log('toString:');
console.log(data.toString());


// Join
console.log('Join:');
var elements = ['Fire', 'Wind', 'Rain'];
console.log(elements.join(' - '));
