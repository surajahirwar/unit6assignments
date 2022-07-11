import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Scrollbar } from './components/Scrolling'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Scrollbar />
    </div>
  )
}

export default App
