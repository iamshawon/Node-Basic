const http = require('http')
const port = 3000
const hostname = '127.0.0.1'

const server = http.createServer((req, res) => {
    res.writeHead(202, {'Content-Type' : 'text/plain'})
    res.write("Hello Server")
    res.end()
})

server.listen(port, hostname, () => {
    console.log(`Server is Running at http://${hostname}:${port}`)
})