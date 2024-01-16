/*const promise =new Promise((resolve, reject)=>{
    reject("Hi we got data from here")
})


// console.log(promise)

promise.then((data)=>{
    console.log(`this is from then block ${data}`)
}).catch((error)=>{
    console.log(`this is from catch block ${error}`)
}).finally(()=>{
    console.log("finally")
})
*/


const getData = async(a, b) =>{
    let data = await a+b
    return data
}

// console.log(getData(5,7))

getData(8,8).then((data)=>{
    console.log(data)
})

/*
states of promise
pending
fulfilled
rejected
*/