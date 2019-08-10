var express = require('express')
var app = express()
var fs = require('fs')
var ejs = require('ejs')
var bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const cookieParser = require('cookie-parser')
const moment = require('moment')
// cnpm install marked --save安装markdown
//引入marked解析md为html
const marked = require('marked')
//百度输入highlight.js,进去选择语言下载，引入highlight
var MongoControl = require('./tools/databasecontrol').MongoControl
var page = new MongoControl('blog', 'page')
var comment = new MongoControl('blog', 'comment')

app.use(cookieParser())
app.use(express.static('./static', {
    index: false
}))
//后台程序相关接口
app.use('/admin',express.static('./static',{index : false}))
app.use('/admin',require('./admin'))
//这是express的路由分发，意思也就是说，只要有/admin接口进来，全都交给./admin.js这个文件去处理。这个文件里面的接口都会在之前加上/admin这个接口，比如：admin/login

//前台程序相关接口
app.get('/', function (req, res) {
    page.find({}, function (error, result) {

        ejs.renderFile('./ejs-tpl/index.ejs', { data: result }, function (err, html) {
            // console.log(html)
            res.send(html)

        })
    })
})
app.get('/p', function (req, res) {

    //查询文章
    var _id = req.query._id
    // console.log(typeof(id),id)
    page.findById(_id, function (err, result) {

        if (result.length == 0) {
            res.status(404).send('亲爱的，出错啦')
            return
        }
        //查询评论
        var data = result[0]
        data.content = marked(data.content)//使用marked处理md为html
        comment.find({ fid: _id ,state : 1 }, function (err, result) {
            // console.log(data)
            ejs.renderFile('./ejs-tpl/page.ejs',{data:data,comment:result},function(err, html){
                html = html.replace('<!-- content-->',data.content)
                res.send(html)
            })
        })
    })

})


app.post('/submitComment',urlencodedParser,function(req,res){
    var _id = req.query._id
    var {email , content} = req.body
    console.log(_id,email , content)
    if(!_id){
        res.send('不允许评论')
        return
    }
    if(!email || !content){
        res.send('不能允许发表评论')
        return
    }
    comment.insert({
        fid : _id,
        content : content,
        author : email,
        date : moment().format('YYYY-MM-DD HH-mm-ss'),
        state : 0
    },(err,result)=>{
        if(err){
            res.status(500).send('你发的什么评论啊，把我的服务器干蒙了')
            return
        }
        res.redirect(
            '/p?_id='+_id
        )
    })
})
app.listen(3001)