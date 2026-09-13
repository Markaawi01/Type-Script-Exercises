function echo<T>(data: T): T {
  return data;
}


const MyName=echo("Abdullahi")
console.log(MyName)
const age=echo(22)
console.log(age)


function firstItem<T>(items: T[]): T {
  return items[0];
}

console.log(firstItem([2,5,9]))