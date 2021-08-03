import React, { useState }from 'react'

export const Count = () => {
    const [ counter, setCounter ] = useState(0)

    const handleCounter = ( number: number) => {
        setCounter(counter + number)
    }

    return (
        <>
        <h3>Counter: <small>{counter}</small></h3>

        <button className='btn btn-primary' onClick = { () => handleCounter(1)}>
            +1
        </button>
        <br /> 
        <button className='btn btn-primary' onClick = { () => handleCounter(-1)}>
            -1
        </button>
            
        </>
    )
}
