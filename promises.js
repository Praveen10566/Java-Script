var roomclean=new Promise(function (resolve,reject) {
                                                   var isClean=true;
                                                   if (isClean){
                                                    resolve('cleaned');
                                                   }
                                                   else
                                                   {
                                                       reject('not cleaned');
                                                   };


})
roomclean.then(function (fromresolve) {
         console.log("room is cleaned");
}).catch (function (fromreject) {
                            console.log("room is not cleaned")
})
