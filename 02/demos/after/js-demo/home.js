//changes the main box text
/*
    multiple lines comments

let price = 99.99,
    name = 'Hiking Boots',
    discounted = false;
let times99 = 99;
let msg;

var pricce = 20;

showMessage(pricce);
console.log(price, name, discounted);
console.log(pricce);

let hello = "Hello \"World\"";
let nome = 'Andrea';
let interpolation = `Hello ${nome}`;

//numbers

let priccce = 1.1 + 1.3,
    taxRate = 0.07,
    amount = 20 - (-2);

showMessage(interpolation);
*/

//strings


//objects

let person = {
    firstName: 'José',
    lastName: 'Maciel'
};

let message = 'Hello',
    number =  Number.parseFloat('ADF123.12'),
    amount = number;

//message = message.toLocaleLowerCase() + ' World';
message = message.toUpperCase();
message = message.length;
console.log(message + ":" + typeof person);

//if else statements
price = 15;

if (price <= 15) {
    showMessage('discounted');
}

if(0){
    showMessage('is truty');
}
else{
    showMessage("it's falsy");
}
if( +(1.1 + 1.3).toFixed(2) !==  2.4){
    showMessage('true');
}
else showMessage();

price = 4;
if(price >10){
    showMessage(true);
}
else if(price < 5){
    showMessage('less than 5');
}

if(1 === "1"){
    showMessage('numbers are equal');
}
else{
    showMessage('numbers are different');
}


