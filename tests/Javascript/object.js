const obj={
    name:"vijay",
    lastname:"Salian",
    age:"29"
}

console.log(obj);
console.log(obj.lastname)
console.log(obj['age'])

obj.Hobbies="Testing"
console.log(obj);

delete obj.Hobbies
console.log(obj);

//Object Keys
const keysValue = Object.keys(obj.lastname)
console.log(keysValue)

//Object Values
const val = Object.values(obj)
console.log(val)


//Checking if an Object is Empty:
let empty = Object.length===0
console.log(empty)

//Merging Objects:
let obj2={country:"India"}
const newObj= Object.assign(obj,obj2)
console.log(newObj)