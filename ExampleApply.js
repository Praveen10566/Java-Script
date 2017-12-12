// Example 1 for Apply method
var obj = {name:"India"};

var feeling = function(a,b,c){
    return " I "+a+" "+b+" "+c+" "+this.name;
};

console.log(feeling.apply(obj,["Love","my","Country"]));
// Example 2 for Apply method
var person = {
    firstName:"sachin",
    lastName: "tendulkar",
    fullName: function() {
        console.log(this.firstName + " " + this.lastName);
    }
}
var myObject = {
    firstName:"rahul",
    lastName: "Dravid",
}
person.fullName.apply(myObject);


// Example 3 for Apply method
function sayHello(){
    console.log(this.message);
}

var obj1 = {
    message : "hello world"
};
console.log(setTimeout(function(){sayHello.apply(obj1)}, 1000))
