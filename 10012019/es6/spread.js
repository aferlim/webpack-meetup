var spread = [1, 2, 4, 5];

var spread2 = [1, 2, 4, 5];

function test(arg1, arg2, arg3) {
  return arg1 + arg2 + arg3;
}

function test3(...spread) {
  return spread;
}

console.log(test3(1, 22, 33));

//console.log([...spread, ...spread2]);

console.log(`string ${test3(1, 22, 33)}`);

const obfield = { id: 1, skuname: "test", price: 10 };

const field = "skuname";
console.log(obfield[field]);

function optional(arg1, arg2 = 10, arg3 = 30) {
  return arg1 + arg2 + arg3;
}

console.log(optional(10));
