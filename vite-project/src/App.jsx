import React from 'react';
import { MyProvider } from './components/MyContext';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import Hello from './components/Hello';
import Bye from './components/Bye';
import Fruits from './components/Fruits';
import Animals from './components/Animals';
import Form from './components/Form';
import Todo from './components/Todo';

function App() {
  const items = ['Apple', 'Banana', 'Cherry'];
  return (
    <>
    {/* <Animals/> */}
    {/* <Fruits/> */}
    {/* <Form/> */}
    <Todo/>
    </>
  )
}

export default App;
