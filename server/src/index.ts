import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import cors from 'cors'
import { countHandler } from './count'

const port = 8080
const app = express()
app.use(cors)
const server = http.createServer(app);

const websocket = new Server(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }
})

websocket.on('connection', (socket) => {
    console.log('user is connected')
    countHandler(socket)
    socket.on("disconnect", () => {
        console.log("user is disconnected")
    })
})


server.listen(port, () => {
    console.log(`server is listening at port ${port}`)
})