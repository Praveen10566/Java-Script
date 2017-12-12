// var obj=function () {
//     var i=0;
//     var add=function (j) {
//         i+=j;
//         return this;
//     };
//     var sub=function (j) {
//         i-=j;
//         return this;
//
//     };
//     var print=function () {
//         console.log(i);
//
//     };
//      return{add:add,sub:sub,print:print};
//
// };
// var x=new obj()
// x.add(5);
// x.sub(2);
// x.print();
// x.add(5).sub(2).print(1);
// console.log(x);


 var passed=7;
var addToThis=function () {
    var inner=5;

    return passed+inner;

};
console.log(addToThis());
// console.dir(addToThis);
