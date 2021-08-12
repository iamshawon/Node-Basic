const http = require('http')
const port = 3000
const hostname = '127.0.0.1'

const server = http.createServer((req, res) => {
    res.end("1st Server")
})

server.listen(port, hostname, () => {
    console.log(`Server is Running at http://${hostname}:${port}`)
})