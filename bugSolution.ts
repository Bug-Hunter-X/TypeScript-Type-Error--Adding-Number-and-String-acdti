function add(a: number, b: number): number {
  return a + b;
}

function addString(a: string, b: string): string {
  return a + b; // String concatenation
}

let result1 = add(1, 2); // Correct: adds numbers
let result2 = addString('1', '2'); // Correct: concatenates strings
console.log(result1); // Output: 3
console.log(result2); // Output: 12