import React, { useEffect, useState } from 'react'

interface Props {
    setNumberArray : React.Dispatch<React.SetStateAction<number[]>>,
    numberArray : number[]
}

const Input = ({setNumberArray, numberArray}: Props) => {
    const [stringNum, setStringNum] = useState<number>(1);
    const [numberCheck, setNumberCheck] = useState<boolean>(true)

    const handleSubmit = () =>{
        if(stringNum && stringNum > 0 && stringNum <= 100){
            setNumberArray([...numberArray, stringNum]);
            setStringNum(1)
        }
        else{
            setNumberCheck(false)
        }
    }

    const handleClear = () =>{
        setNumberArray([]);
    }

  return (
    <div>
        <h1>Please enter a number between 1 and 100</h1>
        {!numberCheck && <p>Please Enter a Number between 1 and 100</p>}
        <input 
            type='number'
            value={stringNum}
            min={1}
            onChange={(e) => setStringNum(parseInt(e.target.value))}
        />
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleClear}>Clear</button>
    </div>
  )
}

export default Input
