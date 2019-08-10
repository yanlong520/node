//递归，树状结构遍历  ： 比如遍历一个文件夹下的某一个文件
var a= 1
var add=  
function(){
    if(a==10) return
    a++
    add()
}
add()