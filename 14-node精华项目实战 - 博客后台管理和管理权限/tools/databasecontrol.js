// cnpm install express --save
// cnpm install body-parse --save
// cnpm install mongodb --save
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const ObjectId = mongodb.ObjectId
const mongodbUrl = 'mongodb://127.0.0.1:27017'
class MongoControl{
    constructor(dbName,collectionName){
        this.dbName = dbName
        this.collectionName = collectionName
    }
    find(findQuery,callback){
        MongoClient.connect(mongodbUrl,{useNewUrlParser : true},(error,client)=>{
            if(error){
                callback(error)
                return
            }
            var db = client.db(this.dbName)
            db.collection(this.collectionName).find(findQuery).toArray(function(error,result){
                callback(error,result)
                client.close()
            })
            
        })
    }
    findById(_id,callback){
        this.find({_id : ObjectId(_id)},callback)
    }
    insert(docs,callback){
        MongoClient.connect(mongodbUrl,{useNewUrlParser : true},(error,client)=>{
            if(error){
                callback(error)
                return
            }
            var db = client.db(this.dbName)
            db.collection(this.collectionName).insert(docs,(error,result)=>{
                callback(error,result)
                client.close()
            })
            
        })
    }
    update(findQuery,newDate,callback){
        MongoClient.connect(mongodbUrl,{useNewUrlParser : true},(error,client)=>{
            if(error){
                callback(error)
                return
            }
            var db = client.db(this.dbName)
            db.collection(this.collectionName).updateMany(findQuery,{$set:newDate},(error,result)=>{
                callback(error,result)
                client.close()
            })
            
        })
    }
    updateById(_id , newDocs , callback){
        this.update({_id : ObjectId(_id) } , newDocs , callback)
    }
    remove(findQuery,callback){
        MongoClient.connect(mongodbUrl,{useNewUrlParser : true},(error,client)=>{
            if(error){
                callback(error)
                return
            }
            var db = client.db(this.dbName)
            db.collection(this.collectionName).remove(findQuery,(error,result)=>{
                callback(error,result.result)
                client.close()
            })
            
        })
    }
    removeById(_id,callback){
        this.remove({_id: ObjectId(_id)} ,callback)
    }
}
// var pages = new MongoControl('blog','page')
// pages.insert(
//     {
//         sort : 'lixihong',
//         title : '李喜红loveyou',
//         author : '大贝贝',
//         // date : moment().format('YYYY-MM-DD HH-MM-SS'),
//         date : new Date(),
//         content : '喜红子，你阿门这周门可爱来撒，你傻乎乎的，一天天不学习，还不爱想额',
//         intro : '这是一篇关于李喜红女孩子的博客'

//     },
//     function(err,res){
//         console.log(res)
//     }
// )
// user.insert({title:'sunvdfvdzdong',content:1531215454},function(){})
// user.find({name:'dfsa'},function(err,res){
//     console.log(res)
// })
// pages.remove({name:'肥宅小汉堡'},function(err,res){
//     console.log(res)
// })
// var _id = '5c72a1e6eaf00f2d60af81ad'
// pages.findById(_id,function(err,result){
//     console.log(result)
// })
exports.MongoControl = MongoControl
