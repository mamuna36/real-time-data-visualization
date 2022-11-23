import { Socket } from "socket.io";

export const countHandler = (socket: Socket) => {

    const startMeasurement = () => {
        setInterval(() => {
            const count = (Math.floor(Math.random() * 100)).toString()
            socket.join(count)
            socket.emit("measurement-started", { count })
        }, 1000)


    }
    socket.on("start measurement", startMeasurement)

}