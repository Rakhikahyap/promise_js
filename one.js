// // var a = require('readline-sync').question('enter the number')
// let a = 10;
// var i= 0;
// var c= 0;
// while (i<=a){
//     j=0;
//     if({
//         c=c++;
//         i=i++;
//     }

// }
// j=j++
// console.log('this is prime num',i)
// console.log('this is not primr num',i)



// var a = require('readline-sync').question('enter a num')
// let i=10;
// let count =0;
// while(i<10){
//     const j=1
//     const k=0
// }

// while (j<=i){
//     if (i%j==0){
//         k=k++
//     j=j++
//     
// if (k==2){
//     count =+1
//     console.log(count,'.','prime',i)
//     i=i++
// }
// }


// a=int(input("enter a number"))
// count=0
// i=1
// while (i<=a):
//     if (a%i==0):
//         count=count+1
//     i=i+1
// if(count==2):
//     print('prime')
// else:
//     print('not prime ')


// var a = require('readline-sync').questionInt('enter the number')
// const c=0;
// let i=1;
// while (i<=a){
//     if (a%i==0){
//         c=c+1
//     i++
//     }
// if (c==2){
//     console.log('prime')

// }else{
//     console.log('not prime')
// }
// }



// var a=20;  
// if(a==10){  
// console.log("a is equal to 10");  
// }  
// else if(a==15){  
// console.log("a is equal to 15");  
// }  
// else if(a==20){  
// console.log("a is equal to 20");  
// }  
// else{  
// console.log("a is not equal to 10, 15 or 20");  
// }  
// for (i=1; i<=5; i++)  
// {  
// console.log(i)  
// }  

// i=2
// for(i=1; i%2==0; i++){
//     console.log("even")
 
// }


function sum(...args) {
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }
  
  let x = sum(4, 9, 16, 25, 29, 100, 66, 77);

console.log(x);