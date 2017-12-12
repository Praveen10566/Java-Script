
//Example 1 for call funcion
var obj = {name:"India"};

var feeling = function(a,b,c){
    return " I "+a+" "+b+" "+c+" "+this.name;
};

console.log(feeling.call(obj,"Love","my","Country"));


// Example 2 for call function
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
person.fullName.call(myObject);


// Example 3 for call function
function sayHello(){
    console.log(this.message);
}

var obj = {
    message : "hello world"
};
console.log(setTimeout(function(){sayHello.call(obj)}, 1000))