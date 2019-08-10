var fs = require('fs')
var marked = require('marked')

fs.readFile('./demo.md',{encoding:'utf-8'},function(err,data){
    console.log(
        marked(data)
    )
})