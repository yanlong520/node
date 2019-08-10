const fs = require("fs")
const path = require("path")
var url = require("url")
var http = require("http")
var querystring = require('querystring')

var getType = function (reqUrl) {
    var { ext } = path.parse(reqUrl)
    switch (ext) {
        case '.css':
            return 'text/css'
        case '.html':
            return 'text/html'
        case '.js':
            return 'x-application/javascript'
        default:
            return 'text/plain'
    }
}


http.createServer((req, res) => {
    console.log(req.url)
    var handle404 = function () {
        res.writeHead(404, {
            'Content': 'text/plain'
        })
        res.end('404 not found')
    }
    var next = function () {
        handle404()
    }
    fs.readFile(
        path.join('./static', req.url),
        (err, data) => {
            if (err) {
                next()
                return
            }
            var contentType = getType(req.url)
            res.writeHead(200, {
                'Content': contentType
            })
            res.end(data)
        }

    )
}).listen(3000)
