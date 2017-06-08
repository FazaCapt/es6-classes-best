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

class Child extends Person {
    constructor (name, age, like){
         super(name, age); //harus memakai ini kalo gak bakalan errorr
         this.like = like;
    }
     getGreeting (){
        
        return `Hiiiiiiiiiiiii my name is ${this.name} and i like ${this.like}`;
    }
}

class Baby extends Person {
    getGreeting () {
        return `Waaaaaahhhh`;
        }
    }
    

var me = new Baby('Faza', 27);
console.log(me.getGreeting());

var anonymous = new Baby('Panji', 27, 'Cars');
console.log(anonymous.getGreeting());






// var me = new Person('Faza', 27);
// console.log(me.getGreeting());

// var anonymous = new Child('Panji', 27, 'Cars');
// console.log(anonymous.getGreeting());


