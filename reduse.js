var arr = [1,2,3,4,5];
var total = 0;

console.log(arr);
total= arr.reduce((total,num)=>{
    return total + num;

})
console.log(total);