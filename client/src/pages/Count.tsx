import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CountContext } from '../context/CountContext'

const Count = () => {
  const { count } = useParams()
  const { ws } = useContext(CountContext)
  const stopMeasurement = () => {
    ws.emit('disconnect')
  }
  return (
    <form className='App flex items-center justify-center w-screen h-screen'>
      <label htmlFor='count' className=' py-2 px-8 rounded-lg text-xl'>
        Current count:
        <input
          value={count}
          name={count}
          readOnly
          className=' py-2 px-8 rounded-lg text-xl'
        />
      </label>
      <button
        className='bg-rose-400 py-2 px-8 rounded-lg text-xl hover:bg-rose-600 text-white'
        onClick={stopMeasurement}
      >
        Stop measurement
      </button>
    </form>
  )
}

export default Count
