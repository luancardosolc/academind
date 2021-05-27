// const person: {
//   name: string,
//   age: number,
//   hobbies: string[],
//   role: [number, string]
// } = {
// //const person = {
//   name: 'Luan',
//   age: 30,
//   hobbies: ['Music', 'Reading'],
//   role: [2, 'author']
// };



// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role { ADMIN, READ_ONLY, AUTHOR}

const person = {
  name: 'Luan',
  age: 30,
  hobbies: ['Music', 'Reading'],
  role: [2, 'author']
};

person.role.push('admin');
//person.role[1] = 10;
console.log(person.role);

console.log(person.name);

for(const hobby of person.hobbies){
  console.log(hobby.toUpperCase());
}