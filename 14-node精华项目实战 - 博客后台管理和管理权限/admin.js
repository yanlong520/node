var express = require('express')
var router = express.Router()
//这里的router功能和app一样
var fs = require('fs')
var path = require('path')
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
var MongoControl = require('./tools/databasecontrol').MongoControl
var page = new MongoControl('blog', 'page')
const comment = new MongoControl('blog','comment')
const moment = require('moment')
//引入cookie管理模块
const CookieControl = require('./cookie')
const admin = new CookieControl()

router.get('/', function (req, res) {
    if (admin.checkToken(req.cookies.token)) {
        res.sendFile(
            path.resolve('./static/admin.html')
        )
    } else {
        res.redirect('/admin/login')
    }
})

router.get('/login', function (req, res) {
    res.sendFile(
        path.resolve('./static/login.html')
    )
})


router.post('/login', urlencodedParser, function (req, res) {
    console.log(req.body.username,req.body.password)
    if (req.body.username == 'admin' && req.body.password == 'admin') {
        res.cookie('token', admin.geToken())
        res.redirect('/admin')
    }else{
        res.status(403).send('登录失败')
    }
})



router.post('/uploadPage', urlencodedParser, function (req, res) {
    if (admin.checkToken(req.cookies.token)) {
        
    } else {
        res.status(403).send('你没有权限')
        return
    }
    var { sort, title, author, content, intro } = req.body
    var now = moment().format('YYYY-MM-DD HH-mm-ss')
    page.insert(
        {
            sort: sort,
            title: title,
            author: author,
            date: now,
            content: content,
            intro: intro

        },
        function () {
            res.send('文章发表成功')
        }
    )
})

router.get('/getComment',function(req,res){
    res.setHeader('Access-Control-Allow-Origin','*')
    if(admin.checkToken(req.cookies.token)){

    }else{
        res.status(404).send('你没有权限')
    }
    var a=[]
    comment.find({state : 0},function(error,data){
        console.log(data.length)
        if(data.length == 0){
            res.send([])
            return
        }
        var count = 0
        for(var i = 0 ; i < data.length; i++){
            var nowdata = data[i]
            
            var nowDataFid = nowdata.fid
            
            page.findById(nowDataFid,function(error,result){
                var page = result[0]
                // console.log('page   :   ',page)
                nowdata.f_title = page.title
                nowdata.f_intro = page.intro
                count++
                // data[i] = nowData
                // console.log('nowdata  :  ',nowdata)
                // a[count].push(nowdata)
                // console.log(a)
                // nowdata += nowdata
                if(count == data.length){ 
                    
                    // a.push(nowdata)
                    // console.log(a)
                    console.log(data)
                    res.send(data)
                    
                }
            })
        }
    })
})

router.get('/passComment',function(req,res){
    res.setHeader('Access-Control-Allow-Origin','*')
    if(admin.checkToken(req.cookies.token)){

    }else{
        res.status(404).send('你没有权限')
    }
    var _id = req.query._id
    comment.updateById(_id,{state : 1},function(error,result){
        res.send(
            {
                result : 'ok'
            }
        )
    })
})
router.get('/nopassComment',function(req,res){
    res.setHeader('Access-Control-Allow-Origin','*')
    if(admin.checkToken(req.cookies.token)){

    }else{
        res.status(404).send('你没有权限')
    }
    var _id = req.query._id
    comment.updateById(_id,{state : 2},function(error,result){
        res.send(
            {
                result : 'ok'
            }
        )
    })
})
module.exports = router