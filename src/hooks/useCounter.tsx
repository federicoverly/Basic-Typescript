import { useState } from 'react'

export const useCounter = ( initial :number ) => {
    
    const [ counter, setCounter ] = useState(initial)

    const handleCounter = ( number: number) => {
        setCounter(counter + number)
    } 

    return { 
        counter: counter,
        handleCounter: handleCounter,
    }
}
