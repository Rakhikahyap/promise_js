// function show(){
//     console.log("i like unknow city");

// }
// function num(callback){
//     callback();
// }
// num(show);

// with parameter

function show(x){
    console.log(" i like alone city" +x);

}
function num(callback){
    var x =101;
    callback(x);
}
num(show);
