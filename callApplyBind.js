

// call

var obj={num:2};
var addToThis=function (a) {
                          
                           return this.num +a;
};
console.dir(addToThis.call(obj,2));



//Apply

var obj={num:2};
var addToThis=function (a,b,c) {

    return this.num +a +b +c;
};
console.dir(addToThis.apply(obj,[2,4,5]));



//bind

var obj={num:2};
var addToThis=function (a,b,c) {

    return this.num +a +b +c;
};
var bound=addToThis.bind(obj);
console.log(bound(1,2,3));