import React from 'react'
import { BasicTypes } from './typescript/BasicTypes'
import { ObjectLiteral } from './typescript/ObjectLiteral'
import { Functions } from './typescript/Functions';
import { Count } from './components/Count';
import { CountWithHook } from './components/CountWithHook';
import { Login } from './components/Login';
import { Users } from './components/Users';
import { Formulaires } from './components/Formulaires';

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
      <hr />
      <Count />
      <hr />
      <CountWithHook />
      <hr />
      <Login />
      <hr />
      <Users />
      <hr />
      <Formulaires />
    </div>
  )
}

export default App