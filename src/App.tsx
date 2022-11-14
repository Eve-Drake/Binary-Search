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
    let middle : number = Math.floor((start + end) /2)
    if(array[middle] === target){
      return true
    }
    if(array[middle] > target){
      quickSort(array, target, start, middle -1)
    }
    else{
      quickSort(array, target, middle + 1, end)
    }
  }

  return (
    <div className="App">
      <Input setNumberArray={setNumberArray} numberArray={numberArray}/>

      {numberArray.map((number, index)=>(
        <div key={index}>{number}</div>
      ))}
    </div>
  )
}

export default App
