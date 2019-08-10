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
            db.collection(this.collectionName).insertMany(docs,(error,result)=>{
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
var user = new MongoControl('blog','page')
// user.insert({name : 'fhsihfd'},function(){}
    // {
    //     sort : 'JSdedsa',
    //     title : 'js写dsdads起来整祝福',
    //     author : '罗dsad德志',
    //     date : new Date(),
    //     content : '就是是dasdsa世界上最好的语言，设么培养她hion，见识是超就是的。。。',
    //     intro : '这是我下dsadsad的第一篇文章，说就是很好'

    // },
    // function(err,res){
    //     console.log(res)
    // }
// )
user.insert({title:'sunvdfvdzdong',content:1531215454},function(){})
// user.find({name:'dfsa'},function(err,res){
//     console.log(res)
// })
// user.remove({name:'hfudsf'},function(err,res){
//     console.log(res)
// })
// user.findById('5c720b3bc7791b27949014c7',function(err,result){
//     console.log(result)
// })
// exports.MongoControl = MongoControl
