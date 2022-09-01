import React from "react";
import { BasicTypes } from "./Typescript/BasicTypes";
import { ObjectLiteral } from "./Typescript/ObjectLiteral";
import { Functions } from "./Typescript/Functions";
import { Count } from "./components/Count";
import { CountWithHook } from "./components/CountWithHook";
import { Login } from "./components/Login";
import { Users } from "./components/Users";
import { Formulaires } from "./components/Formulaires";

const App = () => {
  return (
    <div className="mt-2">
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
  );
};

export default App;
