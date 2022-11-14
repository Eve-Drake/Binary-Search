import e from 'express'
import React, { useState } from 'react'

const Input = () => {
    const [stringNum, setStringNum] = useState<string>('')
    const [num, setNum] = useState<number>(0)

    const handleSubmit = () =>{
        setNum(parseInt(stringNum))
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
