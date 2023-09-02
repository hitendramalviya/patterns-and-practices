// Find GCD & LCM for given 2 numbers
// 8, 12 = 4
function gcd(x, y) {
while(y !== 0) {
const rem = x%y;
x = y;
y = rem;
}

return x;
}

function lcm(x, y) {
const a = gcd(x, y);

if (a > 0) {
return (x \* y)/gcd(x, y);
}

return 0;
}

// Write a program that calculates and prints the sum of the digits of a given number.
// 1234=10
function calculateSumOfDigits(digit) {
const str = digit.toString();
let sum = 0;
for (let i = 0; i < str.length; i++) {
sum += parseInt(str[i]);
}
return sum;
}

function calculateSumOfDigits(num) {
let sum = 0;

while(num > 0) {
const lastDigit = num%10;
sum += lastDigit;
num = Math.floor(num/10);
}

return sum;
}

// Calculate average of given number
// x + y + z / 3

function calculateAverage(...args) {
const length = args.length;
if (length === 0) {
return 0;
}
let sum = 0;
for(let i = 0; i < length; i++) {
sum += parseInt(args[i]);
}
return sum / length;
}

calculateAverage(5,5); // 5

function calculateAverage() {
const length = arguments.length;

if (length === 0) {
return 0;
}
let sum = 0;
for(let i = 0; i < length; i++) {
sum += parseInt(arguments[i]);
}
return sum / length;
}

// [].forEach v/s [].map

const arr = [{ name: 'A', age: 20 }, { name: 'A', age: 22 }];
// [{ name: 'A' }, { name: 'B }]

arr.map(item => ({ name: item.name }));

arr.map(item => {
return {name: item.name};
})

arr.map(function (item) {
return {
name: item.name
};
})

function List() {
return <div>
{arr.map(item => ({ name: item.name }))}

  </div>
}
