# h1大标题
##  h2标题
### h3标题
......
## 斜体和粗体

**斜体展示**
_斜体的另一种方式_

##列表
* 这是标题
   * 缩进
   * 嵌套
      * 嵌套
      * 欠条
 
## 图片
<img src="./1.jpg" width="900px">

## Link
[百度](www.baidu.com)

## 引言
就像我说的
>我爱你
>爱你

## inline code 内联代码 es6 字符串
通过使用 `npm install` 去安装 `package.json` 中的包

## 代码块

```javascript
//这里的```后面的JavaScript是为了代码高亮
var http= require('http')
var router = express.Router()
//这里的router功能和app一样
var fs = require('fs')
var path = require('path')
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
var MongoControl = require('./tools/databasecontrol').MongoControl
var page = new MongoControl('blog', 'page')
const comment = new MongoControl('blog','comment')
const moment = require('moment')
```
## 表格
项目 | 金额
-----|------
按摩 | 200元


### Ctrl+shift+P 唤出来右侧预览窗口
### markdown教程：在百度直接搜：GitHub ### markdown 第一个网页就是