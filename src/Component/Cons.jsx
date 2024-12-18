import  { useState, createContext } from 'react';

// Create the context
const Context = createContext();

// Cons Component that provides state and function via Context
function Cons({ children }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <Context.Provider value={{ count, increment }}>
      {children}
    </Context.Provider>
  );
}

export { Cons, Context };
