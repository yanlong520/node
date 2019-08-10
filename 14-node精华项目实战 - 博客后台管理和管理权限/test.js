
var MongoControl = require('./tools/databasecontrol').MongoControl
var page = new MongoControl('blog','page')
var comment = new MongoControl('blog','comment')
const moment = require('moment')
// cnpm install moment --save
// moment 是处理时间的，上网搜moment.js,可以查看格式

// page.insert(
//     {
//         sort : 'lixihong',
//          title : '李喜红loveyou',
//         author : '大贝贝',
//         date : moment().format('YYYY-MM-DD HH-MM-SS'),
//         content : '喜红子，你阿门这周门可爱来撒，你傻乎乎的，一天天不学习，还不爱想额',
//         intro : '这是一篇关于李喜红女孩子的博客'

//     },
//     function(err,res){
//         console.log(res)
//     }
// )
// var _id = '5c72a1e6eaf00f2d60af81ad'
// page.find({},function(err,result){
//     console.log(result)
// })
page.remove({title : "jsfdsfsd"},function(err,res){
    console.log(res)
})


// comment.removeById('5c7e34506f1c442284970016',()=>{})