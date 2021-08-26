class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

Person.prototype.printName = function(){
    console.log(this.name + ' ' + this.age);
}

var p1 = new Person("p1", 25);
var p2 = new Person("p22rwkhfj", 35);
var p3 = new Person("p3", 45);

//invoke method directly using instance
p1.printName();
//ref to instance method
var printKaty = Person.prototype.printName.bind(p1);
printKaty();
var p1 = new Person("p1", 75);

//call vs apply vs bind

// Example of call without args
var theFirm = {
    title: 'The Firm',
    author: 'John Grisham',
    yearOfRelease: 1991,
    getYearOfRelease() {
        return this.yearOfRelease;
    },
    introduceAuthor(message) {
        return `${this.author} ${message}`;
    },
};

console.log(theFirm.getYearOfRelease()); // prints 1991

var theDaVinciCode = {
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    yearOfRelease: 2003,
};

console.log(theFirm.getYearOfRelease.call(theDaVinciCode)); // prints 2003

// Example of call with args

console.log(theFirm.introduceAuthor('has written a total of 100 books'));

console.log(theFirm.introduceAuthor.call(theDaVinciCode, 'is an American author best known for this thriller novels'))

// Example of apply without args
 theFirm = {
    title: 'The Firm',
    author: 'John Grisham',
    yearOfRelease: 1991,
    getYearOfRelease() {
        return this.yearOfRelease;
    },
    introduceAuthor(message) {
        return `${this.author} ${message}`;
    },
};

console.log(theFirm.getYearOfRelease()); // prints 1991

 theDaVinciCode = {
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    yearOfRelease: 2003,
};

console.log(theFirm.getYearOfRelease.apply(theDaVinciCode)); // prints 2003

// Example of apply with args

console.log(theFirm.introduceAuthor('has written a total of 100 books'));
console.log(theFirm.introduceAuthor.apply(theDaVinciCode, ['is an American author best known for this thriller novels']));

 theFirm = {
    title: 'The Firm',
    author: 'John Grisham',
    yearOfRelease: 1991,
    getYearOfRelease() {
        return this.yearOfRelease;
    },
    introduceAuthor(message) {
        return `${this.author} ${message}`;
    },
};

 theDaVinciCode = {
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    yearOfRelease: 2003,
};

// using bind
//copy created
const boundFunction = theFirm.getYearOfRelease.bind(theDaVinciCode);

boundFunction(); // prints 2003
