const set = new Set(["vijay","testing"])

set.add("test")
console.log(set);
set.add("test")
console.log(set);

set.delete("test")
console.log(set);

console.log(set.has("testing"))