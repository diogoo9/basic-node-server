const http = require('http')

const hostname = '127.0.0.1'
const port = process.env.PORT || 8080

const server = http.createServer((req,res)=>{
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello word!')
})

server.listen(port, hostname, ()=>{
    console.log(`Server rummig at http://${hostname}:${port}`)
})