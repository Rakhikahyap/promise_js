let data= Promise.race([
    new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("2 sec")
        },2000)
    }),
    new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("5 sec")
        },5000)
    }),
    new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("3 sec")
        
        },4000)
    })
])
data.then((item)=>{
    console.warn("then block",item)
}).catch((err)=>{
console.warn("catch block",err)
})
