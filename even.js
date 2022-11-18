var a= require("readline-sync").questionInt("enter a number")
var i = 1;
while (i<=a){
    if (i % 2 ==0){
        console.log(i)
    }
    i++
}
