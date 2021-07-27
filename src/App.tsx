import React from 'react'
import { BasicTypes } from './Typescript/BasicTypes'
import { ObjectLiteral } from './Typescript/ObjectLiteral'
import { Functions } from './Typescript/Functions';

const App = () => {
  return (
    <div className='mt-2'>
      <h1>Typescript Introduction</h1>
      <hr />
      <BasicTypes />
      <hr />
      <ObjectLiteral />
      <hr />
      <Functions />
    </div>
  )
}

export default App