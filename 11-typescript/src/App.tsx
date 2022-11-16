import React from "react";
import { TextField } from "./components/TextField";
// import { Counter } from "./components/Counter";
import GenericList from './components/List'

const App: React.FC = () => {
  return (
    <div>
      <TextField />
      {/* <Counter>
        {({ count, setCount }) => (
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        )}
      </Counter> */}

      <GenericList data={[{ id: 1, name: 'marcos', lastName: 'mezzabotta' }, { id: 1, name: 'marcos', lastName: 'mezzabotta', age: 12 }]} renderItem={(i) => {
        return <div>{i.name}</div>
      }} keyExtractor={(i) => i.id} />
    </div>
  );
};

export default App;
