// 先引用ejs模块，cnpm install ejs --save
// ejs.renderFile('index.ejs',{data:data}),function(err,html){
    // 这里面的data数据会被传送到.ejs文件里面使用
//     console.log(err,data)
// }
// ejs语法
// ：js的语句是需要用<% 内容 %>，需要用这两个符号包起来
// ：变量需要用<%=  变量 %>，需要用这个语句包起来

// ejs需要有自己的模板文件，格式和HTML一样，后缀名字是.ejs
 // 注意：<a href="/p?id=<%= e._id %> ">  id=后面没有空格 