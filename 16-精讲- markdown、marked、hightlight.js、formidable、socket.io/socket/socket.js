// cnpm install socket.io --save
var express = require('express')
var app = express()
var server = require('http').createServer(app)
var io = require('socket.io').listen(server)
var path = require('path')
app.use(express.static('./static'))

app.get('/node_modules/socket.io-client/dist/socket.io.js',function(req,res){
    res.sendFile(
        path.resolve('./node_modules/socket.io-client/dist/socket.io.js')
    )
})
io.on('connection',function(socket){
    socket.on('data',function(data){
        // socket.emit('data','来自node的数据-'+data)//单个链接
        // io.sockets.emit('system','新消息-'+data)//全部链接
        // socket.broadcast.emit('broadcast','黑板消息'+data)//除了自己的全部链接
    })
    socket.on('newMsg',function(data){
        io.sockets.emit('system',data)
    })
})

server.listen(3000)