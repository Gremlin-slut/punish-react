import { useState } from 'react'
import './App.css'
import { tasks, Implements, Accessories, Locations, TimeIncrements, Counts } from './data'
import { logger } from './logger'
import { Analytics } from '@vercel/analytics/react'

function App() {

  const [output, setOutput] = useState<string>("");
  const [specialMessage, setSpecialMessage] = useState<string>("");
  const [username, setUsername] = useState<string>('');
  const [nameToMoan, setName] = useState<string>('');
  const [buttonPressed, setbuttonPressed] = useState<boolean>(false);


  const getTask = () => {
    //get total weight
    const totalWeight = tasks.reduce((sum, item) => sum + item.weight, 0);

    //random weight
    let weightToGo = (Math.floor(Math.random() * totalWeight));

    //item relates to
    for (const item of tasks) {
      weightToGo -= item.weight;
      if (weightToGo <= 0) {
        return item;
      }
    }
    return tasks[tasks.length - 1];
  }

  const generatePunishment = () => {
    const task = getTask();
    const imp = Implements[(Math.floor(Math.random() * (Implements.length)))];
    const acc = Accessories[(Math.floor(Math.random() * (Accessories.length)))];
    const loc = Locations[(Math.floor(Math.random() * (Locations.length)))];
    const baseTime = TimeIncrements[(Math.floor(Math.random() * (TimeIncrements.length)))];
    const extend = TimeIncrements[(Math.floor(Math.random() * (TimeIncrements.length)))];
    const count = Counts[(Math.floor(Math.random() * (Counts.length)))];

    let result = "Gremlin will " + task.description;

    if (task.hasAccessory) {
      result = result + " " + acc.description + " on their " + loc.description;

      if (task.hasImplement) {
        result = result + " and beat it with a " + imp.description + " " + count.description + " times";
      }
    }
    else if (task.hasImplement && task.hasLocation) {
      result = result + " their " + loc.description + " with a " + imp.description + " " + count.description + " times";
    }
    else if (task.hasImplement) {
      result = result + " their tits with a " + imp.description + " " + count.description + " times";
    }
    else if (task.hasLocation) {
      result = result + " in their " + loc.description;
    }
    else if (task.isPost) {
      result = "Gremlin will post a " + task.description + " to EP for " + baseTime.description + " with extentions of " + extend.description
    }


    logger.warn(username + ": " + result);

    setbuttonPressed(true);
    setOutput(result);
  };

  const handleClick = () => {
    generatePunishment();
  };

  const handleCum = () => {
    logger.warn("cum for: " + nameToMoan + "(" + username + ")");
    setSpecialMessage("Gremlin will send you your special video when it is able to");
    generatePunishment();
  }

  const isButtonDisabled: boolean = buttonPressed || (username.trim() === '');
  const isCumButtonDisabled: boolean = buttonPressed || (username.trim() === '') || (nameToMoan.trim() === '');

  return (
    <>

      <h1>Punish Gremlin</h1>
      <div>One roll per legitimately earned punishment only. <br /> Proof will be sent on Kik</div>

      <h3>Limited time special button!</h3>
      <div>Recieve cum video & punishment proof</div>
      <div className="card">
        <input
          type="username"
          value={username}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
          placeholder="Enter Kik username"
        />
        <br /><br />
        <input
          type="name"
          value={nameToMoan}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
          placeholder="Enter name to moan"
        />
        <br /><br />
        <div>  <button disabled={isButtonDisabled} onClick={handleClick}>
          Punish
        </button></div>
        <div>    <button disabled={isCumButtonDisabled} onClick={handleCum}>
          Cum for me, bitch
        </button></div>

        <br /><br />
        <div>  {output}</div>
        <br />
        <div>  {specialMessage}</div>
      </div>

      <h3> Site under construction. Please screenshot your resuls and send to @gremlinslut to claim</h3>
      <Analytics />
    </>
  )
}

export default App
