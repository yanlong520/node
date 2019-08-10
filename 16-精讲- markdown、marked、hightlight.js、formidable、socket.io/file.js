var  express = require('express')
var app = express()
var fs = require('fs')
var formidable = require('formidable')
var path = require('path')

app.use(express.static('./static'))

app.post('/upload',function(req,res){
    // var data = []
    // req.on('data',function(chunk){
    //     data.push(chunk)
    //     console.log(chunk)
    // })
    // req.on('end',function(){
    //     fs.writeFile('./file/1.png',Buffer.concat(data),function(err){
    //         console.log('文件上传被存储到这个 1.png 中了')
    //     })
    // })

    //初始化一个表单上传对象
    var form = new formidable.IncomingForm()
    //设置文件上传的路径
    form.uploadDir = './file'

    form.parse(req,function(err,fields,files){
        var uploadImg = files.img
        console.log(uploadImg)
        fs.rename(
            path.join('./',uploadImg.path),
            path.join('./file',uploadImg.name),
            function(err){
                console.log('文件上传成功')
            }
        )
    })


})

app.listen(3000)