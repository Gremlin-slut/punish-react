import { useState } from 'react'
import './App.css'
import { tasks, Implements, Accessories, Locations, TimeIncrements, Counts } from './data'

function App() {

  const [output, setOutput] = useState("");

  const handleClick = () => {
    const task = tasks[(Math.floor(Math.random() * (tasks.length)))];
    const imp = Implements[(Math.floor(Math.random() * (Implements.length)))];
    const acc = Accessories[(Math.floor(Math.random() * (Accessories.length)))];
    const loc = Locations[(Math.floor(Math.random() * (Locations.length)))];
    const baseTime = TimeIncrements[(Math.floor(Math.random() * (TimeIncrements.length)))];
    const extend = TimeIncrements[(Math.floor(Math.random() * (TimeIncrements.length)))];
    const count = Counts[(Math.floor(Math.random() * (Counts.length)))];



    setOutput(`${task.description} ${imp.description} ${acc.description} ${loc.description} ${baseTime.description} ${extend.description} ${count.description}`);
  };

  return (
    <>

      <h1>Punish Gremlin</h1>
      <div className="card">
        <button onClick={handleClick}>
          Punish
        </button>
        {output}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
