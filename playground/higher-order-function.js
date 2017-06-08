// function one (name, city) {
//     console.log(name, city);
// }

// function two () {
//     console.log('Args', arguments);
//     one.apply(undefined, arguments);
// }

// two('Faza', 'Tangerang');

// // two.apply(undefined, ['jen', 'Panji', 'shofa']);


var add = (a, b) => a + b;

// square - take one number and return square result 
var square = (a) => a * a;

var callAndLog = (func) => {
    return function () {
        var res = func.apply(undefined, arguments);
        console.log('Results is ' + res);
        return res;
    }
}

console.log(add(99, 1));

var addAndLog = callAndLog(add);
addAndLog(44, -3);

// create square and log
var squareAndLog = callAndLog(square);
// call squareAndLog with 3
squareAndLog(3);