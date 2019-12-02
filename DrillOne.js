/* eslint-disable no-console */
'use strict';
function createGreeting(name, age) {
  let yearOfBirth = 2019 - age;
  return `Hi, my name is ${name}.  I was born in ${yearOfBirth}.`;
}

const greeting1 = createGreeting('Blade');
console.log(greeting1);
