// var isEqual = function(str1,str2){
//     console.log(str1===str2)
//  }
//  isEqual("kumar","nayak");

function num (callback){
    var a =102;
    callback(a);
}
num(function(a){
    console.log("i am alone"+a);
})