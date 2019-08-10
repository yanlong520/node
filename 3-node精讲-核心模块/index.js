//comangJS
// ctrl+k//清屏
//单线程异步回调
// const fs = require('fs')
const path = require('path')
const querstring = require('querystring')
const url = require('url')

// fs.readFile('./math.js',function(err,data){
//     console.log('文件读取完成')
// })


//把路径字符串变成对象
pathObj = path.parse(' E:\0 fore-end\寒假\3-node精讲-核心模块\index.js')
console.log(pathObj)
//把路径对象解析成字符串
var pathString = path.format(pathObj)
console.log(pathString)
//resolve：把一堆路径解析成绝对路径
console.log(path.resolve('./','./index.js'))
//join：把一堆路径解析成相对路径
console.log(path.join('./','./index.js'))


//parse ：把查询语句解析为对象
var qs = 'name=18&age=20'
console.log(querstring.parse(qs))
//stringify:把对象解析为字符串
console.log(querstring.stringify(querstring.parse(qs)))
//escape unescape 字符串进行url解码和编码
// console.log(
//     querstring.unescape('https://www.baidu.com/s?wd=%E5%90%jvdf...')
// )


//url  parse format 解析网址、编码网址
console.log(
    url.parse('http://skipper.fun:80/pb/getAllContact')

)
//resolve 以浏览器打开超链接的方式拼接字符串
console.log(
    url.resolve('http://douyu.com/4393948','adijfdisa')

)



