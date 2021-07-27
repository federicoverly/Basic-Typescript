import React from 'react'

// Typescript needs to know how the person has to look, that's where we use interface
// Empty interface does not generate any error
interface Person {
    fullName: string,
    age: number,
    address: Address
}

// When we have an object inside an object, it is good practice to create a new interface for it

interface Address {
    country: string,
    house: number
}

export const ObjectLiteral = () => {

    const person: Person = {
        fullName: 'Federico',
        age: 29,
        address: {
            country: 'Austria',
            house: 23
        }
    }

    // person.fullName = '123' Cant add directly a new parameter

    return (
        <>
            <h3>Object Literal</h3>
            <code>
                <pre>
                    { JSON.stringify( person, null, 2)}
                </pre>
            </code>
        </>
    )
}
