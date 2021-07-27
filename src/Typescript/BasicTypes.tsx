import React from 'react'

export const BasicTypes = () => {

    const name: string = 'Federico'
    // nombre = 123

    const age: number = 35

    const isActive: boolean = true

    const powers: string[] = [ 'Speed', 'Fly', 'Breathing under water', ]

    // powers.push(1)
    // powers.push(true)


    return (
        <>
            <h3>Basic Types</h3>
            { name } - { age } - { (isActive) ? 'Active' : 'Not active' }
            <br />
            { powers.join(', ') }
        </>
    )
}
