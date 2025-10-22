//my approach
//https://onecompiler.com/javascript/442daqrku

//1.
console.log('\n');
const fruits = ['apple', 'banana', 'orange'];
console.log(fruits);
fruits.push('grape');
console.log(fruits);
fruits.shift();
console.log(fruits);

//2.
console.log('\n');
const sentence = ' JavaScript is fun ';
console.log(sentence);
let sen1 = sentence.trim();
console.log(sen1);
let sen2 = sen1.toUpperCase();
console.log(sen2);
let arr = sen2.split(' ');
console.log(arr);

//3.
console.log('\n');
const numbers = [10, 20 ,30, 40, 50];
let num1 = numbers.slice(1,4);
console.log(num1);
let num2 = num1.reverse();
console.log(num2);
let num3 = [numbers[4],...num2, numbers[0]];
console.log(num3);

//4.
console.log('\n');
const emails = 'john@example.com, jane.doe@company.com, user123@gmail.com';
console.log(emails);
let em1 = emails.split(',');
console.log(em1);
let arrEm = [];
for(let i=0; i<em1.length; i++){
  nameArr = em1[i].split('@');
  arrEm.push(nameArr[0]);
}
console.log(arrEm.join(';'));
