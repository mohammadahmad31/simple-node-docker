import express from "express";
const app = express();
const port = 3000;

app.get('/', (req,res)=> {
    res.send("Hello from a Node app running from Docker!!");
});

app.listen(port, ()=> {
    console.log(`App is running at: http://localhost:${port}`);
});
