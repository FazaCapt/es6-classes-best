var obj = {
    name: 'Faza',
    printName: function() {
        console.log(`My name is ${this.name}.`)
    }
};

obj.printName(); // My name is Faza.

setTimeout(obj.printName, 1000); // My name is undefined.

setTimeout(obj.printName.bind(obj), 1000); // My name is Faza.

setTimeout(obj.printName.bind({name: 'Qipli'}), 1000); // My name is Qipli.