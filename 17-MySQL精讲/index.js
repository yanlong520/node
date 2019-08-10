// cnpm install mysql --save
const mysql = require('mysql')
//链接数据库
// 创建数据库链接
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '123456',
    database : 'schoolInfo'
})

//链接数据库
connection.connect();
// 两个参数
// sql语句
// 回调函数：两个参数 => 错误，执行结果
// //查
// connection.query('select * from teacher',function(error,res){
//     if(error) return console.log(error);
//     console.log(res);
// })
// //插入数据
// connection.query(`
// insert into teacher 
// (name,subject,job)
//  values
//  ('皇后','数学','教师')
// `,function(error,res){
//     if(error) return console.log(error);
//     console.log(res);
// })
// //删除数据
// connection.query(`
// delete from teacher where name="张三"
// `,function(error,res){
//     if(error) return console.log(error);
//     console.log(res);
// })
// //改数据
// connection.query(`
// updata teacher set name = '小明' where name = '小红'
// `,function(error,res){
//     if(error) return console.log(error);
//     console.log(res);
// })
// 关闭数据库
connection.end();