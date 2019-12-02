/* eslint-disable no-console */
'use strict';

function getYearOfBirth(age) {
  return 2019 - age;
}

function createGreeting(name, age) {
  const yob = getYearOfBirth(age);
  return `Hi, my name is ${name}.  I was born in ${yob}.`;
}

const greeting1 = createGreeting('Blade', 32);
console.log(greeting1);
