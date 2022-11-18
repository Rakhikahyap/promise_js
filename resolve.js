let data = new Promise((reslove,reject)=>{
    setTimeout(()=>{
        reslove({name:"rakhi",age:36})
    },2000)
})

data.then((item)=>{
    console.warn(item)
})
console.warn("hello")