//changes the main box text
/*
    multiple lines comments
*/
let price = 20;

let message = price > 10 ? 'expensive':'cheap';
console.log(message);

let myFunction = function loggingFunction(){
   console.log('here is a message');
}
myFunction();

let logInConsole = function(message,antoherMessage){
    console.log(message,antoherMessage);
}
logInConsole('logging in console','another message');

let functReturns = function(value1){
    return value1 + 10;
}

logInConsole('returned value:',functReturns(10));

function getSecretkey(){

    let randKey = function(){
        return Math.random();
    }

    console.log('generated key:',randKey());
}
getSecretkey();

function changePercentOff(percentage){
    document.getElementById('percent-off').textContent = percentage +'% OFF';
}
changePercentOff(50);