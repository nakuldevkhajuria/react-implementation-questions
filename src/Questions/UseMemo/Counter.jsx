import React, { useMemo, useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

 
//   const doubledCount = count * 2;
//by using useMemo here, the value of doubledCount will only changes when the value of Count state changes
//unless when count1 changes it will not print 'rendering' but without useMemo
//const doubledCount line will get executed everytime any render happens in the code
// it makes the code more optimze and incrrease the performance.
const doubledCount = useMemo(()=>{
    console.log('rendering...')
    return count *2;
},[count])
  
  const increment1 = () => {
    console.log('second is incremented')
    setCount1(count1 + 1);
  };
  const increment = () => {
    console.log('first is incremented')
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <h2>Doubled Count: {doubledCount}</h2>
      <h2>{count1} helo</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={increment1}>Increment</button>
    </div>
  );
};

export default Counter;
