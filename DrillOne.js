/* eslint-disable no-console */
'use strict';

function getYearOfBirth(age) {
  if(age < 0) {
    throw new Error("Age can not be negative");
  }
  return 2019 - age;
}

function createGreeting(name, age) {
  if(typeof(age) != "number" || typeof(name) != "string") {
    throw new TypeError();
  }
  if(!!name && !!age) {
  const yob = getYearOfBirth(age);
  return `Hi, my name is ${name}.  I was born in ${yob}.`;
  }
  else {
    throw new Error("Arguments not valid");
  }
}

try{
  const greeting1 = createGreeting('blade', 9);
  console.log(greeting1);
} catch(Error) {
    console.log(Error);
};

