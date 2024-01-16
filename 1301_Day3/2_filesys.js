const fs = require('fs');

fs.readFile('./1301_Day3/data.txt', {encoding: 'utf-8'},(err, data)=>{
    if(err){
        console.log(err)
    }
    console.log(data)
})

console.log("here")