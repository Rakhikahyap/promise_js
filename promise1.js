// let data = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(10)
//     },2000)
// })




// data.then((item)=>{
//     throw new Error("net problem")
//     console.warn("then block",item)
// }).catch((err)=>{
// console.warn("catch block",err)

// })


// data.finally((item)=>{
//     console.warn("final block",item)
// })

// data.then((item)=>{
//     console.warn("then block",item)
// }).catch((err)=>{
// console.warn("catch block",err)
// })


// data.then((item)=>{
//     console.warn("1st",item)
//     return item*10;
// }).then((item)=>{
//     console.warn("2nd",item)
//     return item*10;1
// }).then((item)=>{
//     console.warn("3rd",item)
// })
// .catch((err)=>{
//     console.warn("catch block",err)

// })



// data.then((item)=>{
//     console.warn(item)
// }).catch((err)=>{
//     console.warn('catch red',err)
// })

// let data=fetch("http://dunny.restapiexample.com/api/v1/employeees");
// data.then((item)=>{
//     return item.json()
// }).then((result)=>{
//     console.warn("2nd output",result)

// })