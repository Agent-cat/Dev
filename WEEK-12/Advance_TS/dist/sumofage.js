"use strict";
const sumofage = (one, two) => {
    return one.age + two.age;
};
const sum = sumofage({ name: "vishnu", age: 20 }, { name: "Arsha", age: 20 });
console.log(sum);
