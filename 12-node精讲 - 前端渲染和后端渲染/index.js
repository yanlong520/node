var express = require('express')
var app = express()
var path = require('path')

var MongoControl = require('databasecontrol').MongoControl
var page = new MongoControl('test','page')


app.use(express.static('./static',{
    index : 'index.html'
}))

app.get('/getPage',function(req,res){
    var _id = req.query._id
    page.findById(_id,function(error,result){
        res.send(result)
    })
})

app.listen(3000)