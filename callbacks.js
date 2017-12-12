// var cal=function (num1,num2,calType) {
//                                    if (calType=="add"){
//                                        return num1+num2;
//                                    }
//                                    else if (calType="sub"){
//                                        return num1-num2;
//                                    }
//                                    else if (calType="mul"){
//                                        return num1*num2;
//                                    }
//                                    else if (calType="div"){
//                                        return num1/num2;
//                                    }
//                                    console.log(5,6,"add");
//                                    console.log(7,5,"sub");
//                                    console.log(2,4,"mul");
//                                    console.log(4,2,"div");
// }
var add=function (a,b) {
    return a + b;
};
var sub=function (a,b) {
                     return a-b;
};
var calc=function (num1,num2,callback) {
                                     return callback(num1,num2);
                                     console.log(calc(2,3,add));
}
