//如果遇到解析page=2，这样的字符串，应该用querystring对他进行解析，首先得引入这个模块，，，{page ： 2}
//解析url需要引入url模块
// 注意：form和ajax后端接收到的数据不一样；
// form是querystring，ajax是json
// 解决办法是在ajax发起请求的时候设置请求头：setRequestHeader : 'text/json'

// get 请求
// 请求处理
// 静态文件
// 路由
// 参数处理

// post请求
// 接收请求体
// 理由
// 解析请求体
// 处理请求头 ：resquestHeader

// ajax:
// setRequestHeader
const http = require('http')
const url = require('url')
const querystring = require('querystring')
const fs = require('fs')

var server = http.createServer(function(req,res){
    console.log(req.url)
    if(req.method.toLowerCase() == 'get'){
        if(req.url == '/'){
            fs.readFile('./index.html',{encoding:'utf-8'},function(err,data){
                if(err){
                    res.writeHead(500)
                    res.end()
                    return
                }
                res.writeHead(200,{'Content-Type' : 'text/html'})
                res.write(data)
                res.end()
            })
        }
    }
    if(req.method.toLowerCase() == 'post'){
        if(req.url == '/login'){
            var data = ''
            req.on('data',function(chunk){
                data += chunk.toString()
            })
            req.on('end',function(){
                console.log('请求数据完成', data)
                var query = querystring.parse(data)
                res.writeHead(200)
                res.write('finish process,welcome to'+data)
                res.end()
            })
        }
    }
})
server.listen(3000)