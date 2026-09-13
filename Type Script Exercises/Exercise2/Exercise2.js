"use strict";
let names = ["Ahmed", "Omar", "Ali"];
//names.push(20)  // ❌❌
names.push("Osman"); //✅
let grades = [10, 20, 30, 44, 55];
//grades.push("Two")  ❌
grades.push(55); //✅✅
console.log(grades);
let Event_status = [true, false, true];
//status.push("yes")  ❌
Event_status.push(true); //✅
console.log(Event_status);
let products = ["Phone", "Laptop", "99"];
console.log(products);
let City_location = ["Ali", 25]; //  ✅ correct Order
//let City_location2: [string, number] = [22, "Omar"];   //  ❌ incorrect Order
console.log(City_location);
