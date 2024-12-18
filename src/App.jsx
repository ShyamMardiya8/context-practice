 
import { Cons } from './Component/Cons';  // Import the Cons provider
import Counter from './Component/Counter';  // Import the Counter component
import Data from './Component/data';

function App() {
  return (
    <Cons>
      <Counter />
      <Data />
    </Cons>
  );
}

export default App;
