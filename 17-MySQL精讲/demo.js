// 安装MySQL，去官网里面的社区，下载
// 然后是配置
// 1. 打开终端输入 touch.bash_profile
// 2. 输入：open-e.bash_profile
// 3. 最后一行添加 ： export PATH=/usr/local/myaql/bin/:$PATH
// 4. 如果设置成功，终端输入myaql,回车就看到了

// 5. 然后输入： mysql -u root -p  回车，然后输入安装的时候默认的密码
// （注意：输入密码的时候可能不显示，是正常，为了安全）


// 注意：，语句必须是以";"结尾
//查看所有的数据库
// show database
//选择数据库
// use database
// 创建数据库
// create database [数据库名]//create database school
// 删除数据库
// drop database [数据库名]
//创建表
// create table if not exists `teacher`(
//     `id` int unsigned auto_increment,
//     `name` varchar(40) not null,
//     `subject` varchar(40) not null,
//     `job` varchar(40) not null,
//     primary key(`id`)
// )engine=InnoDB default charset=utf8;
// (not null :非空的意思；varchar：字符； auto_increment：自增长)



// 比如有个名字叫teacher的表，有三列：name,subject,job

// 1. 增
//  insert into teacher (name,subject,job) values ('皇后','数学','教师');

// 2. 查
// select * from teacher;//查找全部数据
// select name from teacher;//查找name这一列的数据
//where子句
// select * from teacher where id=1;//查找单行
// select * from teacher where id>1;//查找多行

// 3. 删
// delete from teacher where name="张三";

// 4. 改
// updata teacher set name = '小明' where name = '小红'


//数据可视化工具Sequel Pro