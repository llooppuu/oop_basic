const MyDate = require("./myDate.js");
const day0 = new MyDate(1, 1, 1999);
const day1 = new MyDate(2, 1, 1999);
const day2 = new MyDate(31, 12, 1999);
const day3 = new MyDate(1, 1, 2000);
const day4 = new MyDate(31, 12, 2000);


console.log(day1.printDay())
console.log(day2.printDay())
console.log(day3.printDay())
console.log(day4.printDay())

console.log(day1.earlier(day2)) 
console.log(day2.earlier(day1)) 
console.log(day2.earlier(day3)) 
console.log(day3.earlier(day2)) 
console.log(day4.earlier(day1)) 
console.log(day1.earlier(day4)) 
