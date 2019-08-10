//Ctrl+C 停止node程序的运行
const fs = require('fs')

//每个方法都有一个对应的同步版本（不推荐使用）

//文件属性
// append  追加文件
// copyFile  复制一个文件到另一个文件
// readFile  读取文件全部内容
// writeFile 写入文件如果存在就覆盖
//unlink 删除文件

//文件夹属性
//mkdir 创建文件夹
//readdir  读取文件夹
//rmdir 移除文件夹
//open 打开文件及


//文件和文件夹通用的属性
//existsSync 判断文件/文件夹是否存在（返回布尔型结果）
//stat 检查文件状态
//rename 重命名（可以修改后缀名）


//文件监听
//watch 检测文件的一切变化
//watchFile 检测文件名的变化




// fs.appendFile('./1.txt','文件追加',{encoding:'utf-8'},function(err){
//     if(err){
//         console.log(err)
//         return
//     }
//     console.log('文件追加完成')
// })
// fs.copyFile('./1.txt','./2.txt',function(err){
//         if(err){
//             console.log(err)
//             return
//         }
//         console.log('文件复制完成')
//     })
// fs.readFile('./1.txt', { encoding: 'utf-8' }, function (err, data) {
//     if (err) {
//         console.log(err)
//         return
//     }
//     var fillData = data
//     fs.appendFile('./2.txt', fillData, { encoding: 'utf-8' }, function (err) {
//         if (err) {
//             console.log(err)
//             return
//         }
//         console.log('文件抄袭完成')
//     })
// })



