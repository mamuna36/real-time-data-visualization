import { createContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import socketIO from 'socket.io-client'

const WS = 'http://localhost:8080'

export const CountContext = createContext<null | any>(null)
const ws = socketIO(WS)

export const CountProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate()
  const startMeasurement = ({ count }: { count: string }) => {
    navigate(`/measurement/${count}`)
  }
  useEffect(() => {
    ws.on('measurement-started', startMeasurement)
  })
  return (
    <CountContext.Provider value={{ ws }}>{children}</CountContext.Provider>
  )
}
