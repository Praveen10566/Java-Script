var obj=function () {
                  this.i=0;
                  this.add=function (i) {
                                      this.i+=i;
                      return this;
                  };
                  this.sub=function (i) {
                                      this.i-=i;
                      return this;

                  };
                  this.print=function () {
                                       console.log(this.i);

                  };


};
var x=new obj()
x.add(5);
x.sub(2);
x.print();
x.add(5).sub(2).print();
