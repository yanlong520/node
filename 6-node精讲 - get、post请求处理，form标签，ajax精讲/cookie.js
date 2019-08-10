//解析cookie
var parseCookie = function(req){
    var cookie = req.headers.cookie
    if(typeof cookie == 'string'){

    }else{
        return req.cookie = ''
    }
    var cookieArr = cookie.split(';')
    var cookieObj = {}
    cookieArr.forEach(function(e,index){
        if(index == 0){

        }else{
            e = e.slice(1,e.length)
        }
        var oneCookie = querystring.parse(e)
        var key,value
        key = Object.keys(oneCookie)[0]
        value = oneCookie[key]
        cookieObj[key] = value
    })
    req.cookie = cookieObj
}