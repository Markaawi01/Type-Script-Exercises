

function fullName(first:string, last:string):string{
 return first+ " "+last
}
// console.log("Hello "+fullName("Ahmed ","Omar"));


function registerUser(userName:string, isAdmin?:boolean,lan:string="Eng"):string{
  return "Hello "+userName+ (isAdmin?" Your Role is Admin ":" Your Role is User")+"Your language is "+lan;
}
console.log(registerUser("Abdullahi",true,"somali"))

function average(...scores: number[]): number {
  return scores.reduce((a, b) => a + b, 0);
}

console.log(average(3,3,3))