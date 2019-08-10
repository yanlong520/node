var http = require("http");
var fs = require("fs");
var url = require("url");

var server = http.createServer(function (req, res) {
    // console.log(req);
    var pathname = url.parse(req.url).pathname;
    //url.parse()可以将一个完整的URL地址，分为很多部分,成为一个对象，常用的有：host、port、pathname、path、query。

    console.log(req.url);
    console.log(url.parse(req.url));
    console.log(pathname);
    switch (pathname) {
        case "/": {
            fs.readFile("./index.html", function (err, data) {
                res.writeHead(
                    200,
                     {
                    'Content-Type': 'text/html;charset=UTF8'
                    //标准是mime标准
                });
                res.end(data);

            });

        }
        case "/page": {
            fs.readFile("./page.html", function (err, data) {
                res.writeHead(200, {
                    'Content-Type': 'text/html;charset=UTF8'
                });
                res.end(data);

            });
        }
    }



});

server.listen(80)
// http 默认端口号：80  