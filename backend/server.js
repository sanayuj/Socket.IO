const express=require("express")
const app=express()

const server=require("http").createServer(app)


const io=require("socket.io")(server)


io.on("connection",(socket)=>{
    console.log("Socket",socket);
})

io.on("chat",(payload)=>{
    console.log("Payload: ",payload);
    io.emit("chat",payload)
})


server.listen(4000,()=>{
    console.log("Server is active...")
})