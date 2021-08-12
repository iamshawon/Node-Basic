const fs = require('fs')

// console.log(fs)

fs.writeFile('demo1.txt' , 'This is Sample text.', (err) => {
    if(err){
        console.log('Error')
    }else{
        console.log("New file created!")
    }
})

fs.appendFile('demo1.txt' , ' Append this also', (err) => {
    if(err){
        console.log('Error')
    }else{
        console.log("New Append added!")
    }
})

fs.readFile('demo1.txt', 'utf-8', (err, data) => {
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})

fs.rename('demo2.txt', 'utf-8', (err) => {
    if(err){
        console.log(err)
    }else{
        console.log('Rename done!')
    }
})

fs.unlink('demo1.txt', 'utf-8', (err) => {
    if(err){
        console.log(err)
    }else{
        console.log('Delete done!')
    }
})

fs.exists('demo1.txt', 'utf-8', (result) => {
    if(result){
        console.log('Found')
    }else{
        console.log('Not Found!')
    }
})



// Callback bad diye Sync hobe