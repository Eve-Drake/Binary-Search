import e from 'express'
import { useEffect, useState } from 'react'
import Input from './Input'

function App() {
  const [numberArray, setNumberArray] = useState<number[]>([])
  const [sortedNumberArray, setSortedNumberArray] = useState<number[]>([])
  const [numberInArray, setNumberInArray] = useState<boolean>(false)
  const [search, setSearch] = useState<number>(1)

  useEffect(()=>{
    setSortedNumberArray(numberArray.sort())
  },[numberArray])


  const binarySearch = (array : number[], target : number) =>{
    var start : number = 0;
    var end : number = array.length - 1;
    while (start <= end){
      let mid = Math.floor((start + end) / 2);
      if(array[mid] === target){
        setNumberInArray(true);
        return mid;
      }
      else if(array[mid] < target){
        start = mid + 1;
      }
      else{
        end = mid - 1;
      }
    }
    setNumberInArray(false);
    return -1;
  }

  return (
    <div className="App">
      <Input setNumberArray={setNumberArray} numberArray={numberArray}/>
      <div >
        {numberArray.map((number, index)=>(
          <div className='container' key={index}>
            <p>{number}, </p>
          </div>        
        ))}
        </div>
        <input 
        type='number'
        value={search}
        onChange={(e) => setSearch(parseInt(e.target.value))}
        />
        <button onClick={()=>binarySearch(sortedNumberArray, search)}>Check</button>
        <p>{(numberInArray ? 'Number Is In the Array' : 'Number Is Not In the Array')}</p>
    </div>
  )
}

export default App
