//安装cnpm 先搜索淘宝镜像，然后复制命令，然后再 node终端运行
// cheerio 解析HTML
// cnpm install 程序运行之前，我们先执行这个命令，脚手架，packge.json,运行之后会自动安装这个里面的第三方模块
var express = require('express')//引入express模块
var app = express()//运行express 获得一个app
var path = require('path')
var cookieParser = require('cookie-parser')//引入cookie解析的中间件
var bodyParser = require('body-parser')//引入请求体的中间件
var urlencodedParser = bodyParser.urlencoded({extended : false})//初始化body-parser



// app.use(express.static('./static'))//静态目录
app.use(cookieParser())//适用cookie解析中间件


app.get('/',function(req,res){
    console.log(req.query.wd)
    console.log(
        'cookie',
        // req.cookie.a 
    )
    res.cookie('a','1')//控制台输入document.cookie，就会得到cookie 
    res.sendFile(path.resolve('./static/index.html'))
})
//适用body-parser处理post请求的请求体
app.post('/upload',urlencodedParser,function(req,res){
    console.log(req.body)
    res.status(403).send('forbiden')
})
app.listen(3000)