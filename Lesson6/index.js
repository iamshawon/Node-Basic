const http = require('http')
const PORT = 3000;
const HOST = '127.0.0.1'

const server = http.createServer((req, res) => {
    res.end("Welcome to server")
})

server.listen(PORT, HOST, ()=>{
    console.log(`Server is Running at http://${HOST}:${PORT}`)
})