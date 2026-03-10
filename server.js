const express = require("express")
const app = express()

app.use(express.text())

app.post("/upload",(req,res)=>{

let code = req.body

console.log(code)

res.send("Code received")

})

app.listen(3000,()=>{
console.log("Server running")
})
