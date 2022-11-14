import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Input from './Input'

function App() {
  const [numberArray, setNumberArray] = useState<number[]>([])

  const quickSort = (array: number[], target: number, start: number, end: number) =>{
    if(start > end){
      return false
    }
    
  }

  return (
    <div className="App">
      <Input />
    </div>
  )
}

export default App
