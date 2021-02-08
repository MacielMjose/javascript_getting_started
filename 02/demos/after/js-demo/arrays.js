//create and initialing an array
let values = [1,2,3];
let anotherway = Array.of(1,2,3);

const valores = ['a','b','c'];
console.log(valores);
console.log(typeof values);
console.log(Array.isArray(values));

//Acessing an array

console.log(values[0]);
console.log(values[1]);
console.log(values[2]);
values[0] = 'aaa';

//push(), accept multiples values

valores.push('d');
console.log(valores);

//pop(), accept multiples values

const last = values.pop();
console.log(last);

//shift() -> moves the entire array to the the left removing first element,accept multiples values

const arrShift = ['x','y','z'];
let removed = arrShift.shift();
console.log('shift:'+removed);

//Unshift() -> moves the entire array to the the left adding an element on the begining,accept multiples values

const arrUnshift = ['r','t','k'];
let added = arrUnshift.unshift('p');
console.log('unshifted:'+added);

//Slice() creates a copy of original array, 'slicing' from the position x to y

const arrSlice = ['a','b','c'];
const newValues = arrSlice.slice(1,2);
console.log(newValues);

//Splice() removes from all elements from x to y position, also adds items if provided second parameter as zero and a new value

const arrSplice = ['a','b','c'];
arrSplice.splice(1,1);
console.log(arrSplice);
arrSplice.splice(1,0,'new value');
console.log(arrSplice);


