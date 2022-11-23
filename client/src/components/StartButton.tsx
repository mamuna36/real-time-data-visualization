import React, { useContext } from 'react'
import { CountContext } from '../context/CountContext'

const StartButton: React.FC = () => {
  const { ws } = useContext(CountContext)
  const startMeasurement = () => {
    ws.emit('connection')
    ws.emit('start measurement')
  }
  return (
    <button
      className='bg-rose-400 py-2 px-8 rounded-lg text-xl hover:bg-rose-600 text-white'
      onClick={startMeasurement}
    >
      Start the measurement
    </button>
  )
}

export default StartButton
