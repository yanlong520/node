### ctrl+shift+P 
# 怎么把md用在博客当中
0. 使用vscode编写md,然后存在数据库当中
1. 安装node的md转HTML模块`marked`;
>_注意：ejs会将HTML转化为字符串，无法被浏览器解析，需要手动写replace
2. 前端使用代码高亮插件`highlight.js`
3. 引入`highlight.js`的css文件；
>_注意：link标签必须要有`rel="stylesheet"`属性
4. 引入`highlight.js`的js文件`highlight.pack.js`
5. 写一个`hljs.initHightlihjtingOnLoad()`
```html
<link rel="stylesheet" href="/highlight/styles/hybrid.css">
    <script src="/highlight/highlight.pack.js"></script>
    <script>hljs.initHighlightingOnLoad();</script>
    
```
6. 运行代码高亮代码
```javascript
$(document).ready(function(){
       $('pre code').each(function(i,block){
           hljs.highlightBlock(block);
       });
   });
```