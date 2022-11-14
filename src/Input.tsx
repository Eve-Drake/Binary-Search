import React, { useState } from 'react'

interface Props {
    setNumberArray : React.Dispatch<React.SetStateAction<number[]>>,
    numberArray : number[]
}

const Input = ({setNumberArray, numberArray}: Props) => {
    const [stringNum, setStringNum] = useState<string>('')

    const handleSubmit = () =>{
        setNumberArray([...numberArray, parseInt(stringNum)])
    }

  return (
    <div>
        <input 
            type='text'
            value={stringNum}
            onChange={(e) => setStringNum(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Input
