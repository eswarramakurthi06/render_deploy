const express = require('express');
const app = express();
const port = process.env.port || 3000
const cors = require('cors');
app.use(cors());

app.get('/',(req,res)=>{
    res.send("Hello Eswar! Your server is deployed successfully.");
})

app.listen(port, ()=>{
    console.log(`Server is running at ${port}`);
    
    setInterval(() => {
        fetch("https://render-deploy-onwa.onrender.com/")
    },840000);
})