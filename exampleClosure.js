// Example 1  for Closure
var add = (function () {
    var count = 0;
    return function () {return count += 1;}
})();

console.log(add());
console.log(add());
console.log(add());

// Example 2 for Closure

function makeAdder(x) {
    return function(y) {
        return x + y;
    };
}

var value1 = makeAdder(6);
var value2 = makeAdder(8);

console.log(value1(2));
console.log(value2(3));


// Example 3 for Closure

function makeFunc() {
    var name = 'yarramalli';
    function displayName() {
        console.log(name);
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc();