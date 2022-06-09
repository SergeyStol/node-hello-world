const http = require('http')

const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
    console.log(JSON.stringify(req.headers));
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World\n')
})

server.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`)
})