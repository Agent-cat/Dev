interface Person{
    name:String;
    age:number;
}

const sumofage=(one:Person ,two:Person):number=>{
    return one.age + two.age
}

const sum=sumofage({name:"vishnu",age:20},{name:"Arsha",age:20})
console.log(sum)