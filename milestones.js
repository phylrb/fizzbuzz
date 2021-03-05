//  Coding Session 08 - MILESTONE 1
function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "Fizzbuzz";
    } else if (num % 3 === 0) {
        return "Fizz";
    } else if (num % 5 === 0) {
        return "Buzz";
    } else return num;
}
console.log(`Coding session 08 - Milestone 1`);
console.log(fizzBuzz(12));
console.log(fizzBuzz(55));
console.log(fizzBuzz(60));
console.log(fizzBuzz(14));
console.log(fizzBuzz(110));
console.log(fizzBuzz(217));



//  Milestone 2
function fizzBuzzCounter(digit) {
    for (rep = 1; rep <= digit; rep++) {
        console.log(fizzBuzz(rep))
    }
    return rep;
}

let rep;
console.log(`Coding session 08 - Milestone 2`)
fizzBuzzCounter(15);