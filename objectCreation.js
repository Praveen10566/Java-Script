// Factory method
var peopleFactory=function (name,age,city) {
                                           var temp={};
                                           temp.name=name;
                                           temp.age=age;
                                           temp.city=city;
                                           temp.printPerson=function () {
                                                                      console.log(this.name+','+this.age+','+this.city);
                                           };
                                           return temp;

}
var person1=peopleFactory('Bob',30,'milpitas');
var person2=peopleFactory('richard',23,'fremont');
var person3=peopleFactory('mani',33,'sanRoman');
person1.printPerson();
person2.printPerson();
person3.printPerson();



//Constructor Method
var peopleConstructor=function (name,age,city) {
    this.name=name;
    this.age=age;
    this.city=city;
    this.printPerson=function () {
        console.log(this.name+','+this.age+','+this.city);
    };

}
var person1=new peopleConstructor('Bob',30,'milpitas');
var person2=new peopleConstructor('richard',23,'fremont');
var person3=new peopleConstructor('mani',33,'sanRoman');
person1.printPerson();
person2.printPerson();
person3.printPerson();

//Prototype model

var peopleProto=function () {

};
peopleProto.prototype.name='noname';
peopleProto.prototype.age='number';
peopleProto.prototype.city='CityName';
peopleProto.prototype.printPerson=function () {
    console.log(this.name+','+this.age+','+this.city);
}
var person1=new peopleProto();
person1.name='john';
person1.age=29;
person1.city='milptas';
person1.printPerson();

//Dynamic Prototype

var peopleDynamicProto=function (namme,age,job) {

}

    this.name = name;
    this.age = age;
    this.job = job;

    if (typeof this.sayName != "function") {
        this.prototype.sayName = function () {
            return this.name;
        };
    }