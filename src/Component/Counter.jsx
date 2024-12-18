import  { useContext } from 'react';
import { Context } from './Cons';  // Import the Context

function Counter() {
  const { count, increment } = useContext(Context); // Get the state and function from context

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
