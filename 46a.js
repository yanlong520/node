var express = require('express')
var app = express()

app.get('/getContact', function (req,res) {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.send(
        [
            {
            id: 1,
            name: 'lalala',
            phoneNumber: 156454
        },
        {
            id: 1,
            name: 'lalala',
            phoneNumber: 156454
        }
    ]
    )
    // console.log(res)
})

app.listen(3333);