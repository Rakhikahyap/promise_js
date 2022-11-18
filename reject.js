let data = new Promise((reslove,reject)=>{
    setTimeout(()=>{
        reslove("some problem")
    },2000)
})

data .then((item)=>{
    console.warn(item)
}).catch((err)=>{
console.warn('catch block',err)
})

