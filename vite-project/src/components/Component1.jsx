import React, { useContext } from 'react';
import { MyContext } from './MyContext';

const Component1 = () => {
  const {count, setCount } = useContext(MyContext);

  return (
    <div>
      <h2>Component 1</h2>
      <p>{count}</p>
      <button onClick={() => setCount(count+1)}>   
        Update State
      </button>
    </div>
  );
};

export default Component1;
