import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import { axiosInstance } from './api/axios'

function App() {

  const [response, setResponse] = useState('pusto')

  const fetchData = async () => {
    try {
      const {data} = await axiosInstance.get("/test")
      setResponse(JSON.stringify(data))

    } catch(e) {
      console.log(e)
      setResponse("ERROR")
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
    </div>
        {response}
    </div>
  )
}

export default App
