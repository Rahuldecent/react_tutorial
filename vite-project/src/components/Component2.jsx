import React, { useContext } from 'react';
import { MyContext } from './MyContext';

const Component2 = () => {
  const { count, setCount } = useContext(MyContext);

  return (
    <div>
      <h2>Component 2</h2>
      <p>Shared State: {count}</p>
    </div>
  );
};

export default Component2;
