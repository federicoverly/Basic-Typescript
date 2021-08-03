import { useCounter } from '../hooks/useCounter';
import React from 'react'

export const CountWithHook = () => {

    const { counter, handleCounter } = useCounter(10)

    return (
        <>
        <h3>Counter with Hook: <small>{counter}</small></h3>

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
