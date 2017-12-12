// Example 1 for Bind method


var obj = {name:"India"};

var feeling = function(a,b,c){
    return " I "+a+" "+b+" "+c+" "+this.name;
};
var bound = feeling.bind(obj);
console.dir(bound);
console.log(bound("love","my","Country"));


// Example 2 for Bind method

var person = {
    name: "praveen",
    hello: function(d) {
        console.log(this.name + " says hello " + d);
    }
}

person.hello("world");
var helloFunc = person.hello.bind({ name: "kumar" });
helloFunc("world");


// Example 3 for Bind method

function sayHello(){
    console.log(this.message);
}

var obj = {
    message : "hello world"
};

console.log(setTimeout(sayHello.bind(obj), 1000));

