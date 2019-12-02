/* eslint-disable no-console */
'use strict';

function getYearOfBirth(age) {
  if(age < 0) {
    throw new Error("Age can not be negative");
  }
  return 2019 - age;
}

function createGreeting(name, age) {
  if(!!name && !!age) {
  const yob = getYearOfBirth(age);
  return `Hi, my name is ${name}.  I was born in ${yob}.`;
  }
  else {
    throw new Error("Arguments not valid");
  }
}

try{
  const greeting1 = createGreeting('Blade', 0);
  console.log(greeting1);
} catch(Error) {
    console.log(Error);
};

