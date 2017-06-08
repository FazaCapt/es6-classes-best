class Person {
    constructor (name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting () {
        return `Hi! i'm ${this.name}.`;
    }
    getDescription () {
        return `${this.name} is ${this.age} years old`
    }
    toString () {
        return JSON.stringify(this);
    }
};



var me = new Person('Faza', 27);
console.log(me.getDescription());

var anonymous = new Person();
console.log(anonymous.getDescription());


// console.log({age: 27}.toString());
// console.log(me.toString());