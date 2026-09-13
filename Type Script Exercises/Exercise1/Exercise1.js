"use strict";
let product_Name = "Mango";
let price = 10;
let discoutAvailable = true;
//product_Name=55;  ❌  //string varailbe can not be assignet to a value which is not string 
product_Name = "banana";
console.log(product_Name); //✅
// price="Twelve"   ❌  Price  is a number , so can not be assigned to text or strinc
price = 12; //✅
// discoutAvailable="false"  ❌
discoutAvailable = true; //✅
function getDiscount(price, discount) {
    return price - price * discount;
}
function printLength(x) {
    console.log(x.length);
}
printLength("Hello"); // It works  ✅
printLength(123); // It is Crash  ❌
