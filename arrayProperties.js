var a=[3,6,4,7,8,9,2,1,5,0];
var h= function(){
    alert("elements in array a=" + a)
}
var f= function(){
    alert("length of array a=" + a.length);
}
var g=function(){
    alert("IndexOf array a="+ a.indexOf(3))
}

var u= function () {
    a.push(23);
    alert("Array after push="+a)
}
var t=function(){
    a.pop();
    alert("Array after pop="+a)
}
var e= function(){
    a.unshift(45);
    alert("Array after unshift="+a)
}
var j= function()
{
    a.shift();
    alert("Array after shift="+a)
}
var k= function(){
    a.slice(2,3);
    alert("Array after slice="+a)
}
var l= function(){
    a.splice(3,4);
    alert("Array after splice="+a)
}
var s= function(){
    a.sort();
    alert("Array after sort="+a)
}
var r= function(){
    a.reverse()
    alert("Array after reverse="+a)
}