// var s="I Love My Country";
// var a=function() {
//     s.split();
//     console.log(a);
// }
// s.reverse();
// console.log(a);

var s2= function() {
    var s1 = function (str) {
        var b = str.split("");
        var c = b.reverse();
        var d = c.join(" ");
        console.log(d);
    };
    s1("this is a string");
}
