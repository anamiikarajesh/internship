const express= require('express');
const app=express();
const cors=require('cors')
const {MongoClient} = require('mongodb'); 
app.use(cors())
app.use(express.json())

let user= []
db=''


async function mongoConnect() {
    let client = new MongoClient('mongodb+srv://anshif:nesRoWgW5SqAD0yF@cluster0.8dtglzr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    db = client.db('jyothi');
   ;
 }
 
 
app.get('/users',function(req,res){
    res.json(user)

})
app.post('/Signup',async function(req,res){
    let output = await db.cpllection('user').find({}).toArray();
    res.json(output)
})

app.post('/Login',function(req,res){
    console.log(req.body);
    for(let i=0;i<user.length;i++){
        if(user[i].email == req.body.email){
            if(user[i].pass1==req.body.pass1){
                return res.json(user[i]);
            }
}
    }
return res.json("Email not found")
}

)
let golu='6000'
app.get('/golu',function(req,res){
res.json(golu)})

    let product  =[{'productname':'zara','model':'12056','price':'2999'}]
        app.get('/product',function(req,res){
            res.json(product)
        })
app.listen(5000,function(){
    console.log('server is ready,listening on port 5000');
    mongoConnect()
})