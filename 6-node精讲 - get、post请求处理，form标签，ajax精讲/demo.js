//重定向
 var http =  require('http')
var server = http.createServer(function(req,res){
    // Buffer类（缓冲区）有一个toString()的方法
    // 重定向状态码：302
    res.writeHead(302,{Location:'http://baidu.com'})
    res.write('1230')
    res.end()
})
server.listen(3002)

// 跨域问题  res.setHeader('Access-Control-Allow-Origin','*')
