function adding(n1: number, n2: number): number {
  return n1 + n2;
}

function prints(num: number): void {
  console.log('Result: ' + num);
}

function addAndHandle(n1: number, n2:number, cb: (num: number) => void) {
  const result = n1 + n2;
  return cb(result);
}

prints(adding(5, 12));

//let combineValues: Function;
let combineValues: (a: number, b: number) => number;

combineValues = adding;

console.log(combineValues(8, 8));