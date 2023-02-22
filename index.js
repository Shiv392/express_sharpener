const express=require('express');
const app=express();
const port=8000;

const middle=(req,res,next)=>{
    if(!req.query.age){
        res.send('plz enter age');
    }
    else if(req.query.age<18){
        res.send('you are under 18 cant visit');
    }
    else {
        next();
    }
}
app.use(middle);  //application level middleware

app.get('/',(req,res)=>{
    res.send('this is home route');
    
})

app.listen(port,()=>{
    console.log(`server is listining on http://localhost:${port}`);
})