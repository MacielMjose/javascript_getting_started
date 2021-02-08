let mySymbol = Symbol(); //hides information of an object if declared inside an object

let person = {
    name:"john",
    age:32,
    partTime:false,
    [mySymbol]: 'secretInformation',
    showInfo: function(realAge){
        showMessage(this.name + ' is ' + realAge);
    }
};


person.age = 47; //person['age'] = 67;
person.name = "marcelo";
person.showInfo(56);

let pessoa = {
    idade: 32,
    nome: 'joão da silva'
};

function incrementarIdade(pessoa){
    pessoa.idade++;
}
incrementarIdade(pessoa);
showMessage(pessoa.idade);


let now = new Date();
showMessage(now.toDateString());


showMessage(Math.abs(-42));

let s = 'hello';
showMessage(s.charAt(0));