import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Jobs from './components/Jobs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Jobs />
    </div>
  )
}

export default App
