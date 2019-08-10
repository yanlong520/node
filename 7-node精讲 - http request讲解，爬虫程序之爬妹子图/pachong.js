// var http  =  require('http')
// var url  =  require('url')
// var querystring  =  require('querystring')



// //如何在POST请求的body中接收数据
//这个很重要

// http.createServer((req,res) => {
//     var query = ""
//     req.on('data',function(chunk){
//         query += chunk.toString()
//     })
//     req.on('end',function(){
//         var wd = querystring.parse(query).wdaa
//         res.writeHead(200,{
//             'Content-Type' : 'text/plain;charset=UTF-8'
//         })
//         res.end(`你搜索的是${wd}`)
//     })

// }).listen(3000)


// var http = require('http')
// var url = require('url')
// var querystring = require('querystring')

// var data = [
//     {
//         name: 1
//     },
//     {
//         name: 2
//     }
// ]
// http.createServer((req, res) => {

//     var callbackName = querystring.parse(url.parse(req.url)).callback
//     console.log(callbackName)

//     res.writeHead(200, {
//         'Content-Type': 'x-application/javascript'
//     })
//     res.end(
//         `${callbackName}(${JSON.stringify(data)})`
//     )

// }).listen(3000)


//爬虫
var http = require('http')
var url = require('url')
var fs = require('fs')
var https = require('https')
var querystring = require('querystring')
var {htmlParser} = require('js-parse-html')
var arr = []

var request = https.request(
    {
        protocol: 'https:',
        host: 'ss0.bdstatic.com',
        path: '/ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1540025957&di=7c09ececad6862009872d33bcc2538fd&src=http://pic32.photophoto.cn/20140913/0038038234054099_b.jpg',
        port: 443//https默认的端口号；http默认的端口号是80
    }
)
//https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1540025957&di=7c09ececad6862009872d33bcc2538fd&src=http://pic32.photophoto.cn/20140913/0038038234054099_b.jpg
request.on('response', function (res) {
    res.on('data', function (chunk) {
        arr.push(chunk)
    })
    res.on('end', function () {
        var  html = Buffer.concat(arr).toString
        var dom  = htmlParser(html)
        var src = dom.getElementsByTagName('img')[0].getAttribute()
        // console.log(
        //     Buffer.concat(arr)//拼接buffer标签
        // )
        // fs.writeFile('./lalala.jpg', Buffer.concat(arr), (err) => { })
    })
})
request.end()