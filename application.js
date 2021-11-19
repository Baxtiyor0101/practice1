// function  obj(num1=0, num2=0) {

//     console.log(num1+num2);

//     return function (num3=0) {
//         console.log(num1+num2+num3);
//     }
// }
// obj(1,2);
// obj(1)(2);




const obj1={
    a:1,
    b:2,
    getA() {
        console.log(this.a);
        return this;
    },
    getB() {
       console.log(this.b);
       return this;
    } 
};
obj1.getA().getB();





// function add(a) {
//     if(arguments.length === 1) {
//       return function(b) {
//         return a + b;
//       }
//     }
  
//     return Array.from(arguments).reduce((a,b) => a + b);
//   }

//   add(1)(2);