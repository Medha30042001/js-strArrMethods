//my approach
//https://onecompiler.com/javascript/442dcvnka

//Q1: Get keys and values
console.log('\n');
const car = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2020
};
let keys = Object.keys(car);
let values = Object.values(car);
console.log('Keys:', keys);
console.log('Values:', values);

//Q2: Add new property without mutating
console.log('\n');
const employee = {
  name: 'Rahul',
  designation: 'Developer'
};
console.log('Original:', employee);
employee.salary = 50000;
console.log('New:', employee);

//Q3: Merge two objects
console.log('\n');
const objA = { x: 1, y: 2 }; 
const objB = { y: 3, z: 4 }; 
console.log(objA);
console.log(objB);
newObj = Object.assign({}, objA, objB);
console.log(newObj);

//Q4: Freeze an object
console.log('\n');
const settings = {
  theme: 'dark',
  notifications: true
};
console.log(settings);
Object.freeze(settings);
settings.theme = 'light';
settings.notifications = false;
console.log(settings);

//Q5 Check if a property exists in an object
console.log('\n');
const book = {
  title: 'Atomic Habits',
  author: 'James Clear',
  price: 499
};
console.log(book);
if(book.hasOwnProperty('author')){
  console.log('Yes')
}else console.log('No');
if(book.hasOwnProperty('publisher')){
  console.log('Yes')
}else console.log('No');
