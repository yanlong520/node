1. 上传文件必须为post请求
2. 文件上传，form表单必须设置这个命令`enctype="multipart/form-data"`
3. 文件上传，input必须`type="file" name = "img"`

>发现 - req的data事件根本没有被处罚，获取不到二进制的chunk

4. 需要安装第三方模块`cnpm install formidable --save`
5. formidable的使用
```javascript

var formidable = require('formidable')
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
```