//let userInput: unknown;
let userInput: any;
let userName: string;

userInput = 5;
userInput = 'Max';
userName = userInput;

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code};
}

const resultError = generateError('An error occurred!', 500);
console.log(resultError); // Nothing is printed, bc and error interrupts everything


