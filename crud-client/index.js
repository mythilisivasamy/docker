const express = require('express');
const app = express();
app.use(express.json());
app.use(express.static(__dirname+"/public/dist/admin-type-form"))
app.get('/*',(req,res)=>{
   res.redirect('http://localhost:8000');
})

app.listen(8000,()=>{
    console.log("sever is listening at 8000")
});

