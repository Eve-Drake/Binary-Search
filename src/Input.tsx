import React, { useEffect, useState } from 'react'

interface Props {
    setNumberArray : React.Dispatch<React.SetStateAction<number[]>>,
    numberArray : number[]
}

const Input = ({setNumberArray, numberArray}: Props) => {
    const [stringNum, setStringNum] = useState<number>(1);
    const [numberCheck, setNumberCheck] = useState<boolean>(true)

    const handleSubmit = () =>{
        if(numberCheck && stringNum){
            setNumberArray([...numberArray, stringNum]);
            setStringNum(1)
        }
    }

    const handleClear = () =>{
        setNumberArray([]);
    }

  return (
    <div>
        {!numberCheck && <p>Please Enter a Number</p>}
        <input 
            type='number'
            value={stringNum}
            onChange={(e) => setStringNum(parseInt(e.target.value))}
        />
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleClear}>Clear</button>
    </div>
  )
}

export default Input
