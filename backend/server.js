const express=require("express")
const app=express()
const server=require("http").createServer(app)
const io=require("socket.io")(server,{cors: {
    origin: "*"
  }})


io.on("connection",(socket)=>{
    console.log("Socket is this :",socket);

    socket.on("chat",(payload)=>{
        console.log("Payload is this : ",payload);
        io.emit("chat",payload)
    })
})




server.listen(4000,()=>{
    console.log("Server is active...")
})