import { useState } from 'react'
import { tasks, Implements, Accessories, Locations, TimeIncrements, Counts } from './data'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Analytics } from '@vercel/analytics/react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { TextField } from '@mui/material';

const theme = createTheme({
  colorSchemes: {
    light: false,
    dark: true,
  },
});

function App() {

  const [output, setOutput] = useState<string>("");
  const [specialMessage, setSpecialMessage] = useState<string>("");
  const [username, setUsername] = useState<string>('');
  const [nameToMoan, setName] = useState<string>('');
  const [buttonPressed, setbuttonPressed] = useState<boolean>(false);

  let emailBody = '';


  const sendEmail = async () => {

    // Call the relative Vercel API path
    const response = await fetch('/api/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: nameToMoan,
        username: username,
        pumishment: output
      }),
    });

    const result = await response.json();
    if (result.success) {
      alert('The slut has been notified');
    } else {
      alert('Please send a screenshot of your results to the slut.');
    }
  };

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

    let result = task.description;

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
      result = "post a " + task.description + " to EP for " + baseTime.description + " with extentions of " + extend.description
    }

    emailBody = emailBody + " \n " + username + ": " + result;

    setbuttonPressed(true);
    setOutput(result);
    sendEmail();
  };

  const handleClick = () => {
    generatePunishment();
  };

  const handleCum = () => {
    emailBody = "cum for: " + nameToMoan + "(" + username + ")";

    setSpecialMessage("Gremlin will send you your special video when it is able to");
    generatePunishment();
  }

  const isButtonDisabled: boolean = buttonPressed || (username.trim() === '');
  const isCumButtonDisabled: boolean = buttonPressed || (username.trim() === '') || (nameToMoan.trim() === '');

  return (
    <>

      <ThemeProvider theme={theme} defaultMode='dark'>
        <CssBaseline enableColorScheme />

        <Stack spacing={2}
          sx={{
            alignItems: 'center',
            height: '100vh', // Needed if you want to center vertically inside the viewport
          }}>
          <h1>Punish Gremlin</h1>
          <div>One roll per legitimately earned punishment only. </div>
          <div> Proof will be sent on Kik</div>

          <h3>Limited time special button!</h3>
          <div>Recieve cum video & punishment proof</div>
          <Stack direction="row" spacing={2}>
            <TextField
              required
              id="username"
              label="Kik username"
              onChange={(event) => { setUsername(event.target.value) }}
            />
            <TextField
              required
              id="nameToMoan"
              label="Name to Moan"
              onChange={(event) => { setName(event.target.value) }}
            />
          </Stack>
          <Stack direction="row" spacing={2}>
            <Button variant='contained' disabled={isButtonDisabled} onClick={handleClick}>Punish</Button>
            <Button variant='contained' disabled={isCumButtonDisabled} onClick={handleCum}> Cum for me, bitch</Button>
          </Stack>

          <br /><br />
          <div> Gremlin will {output}</div>
          <br />
          <div>  {specialMessage}</div>

          <Analytics />
        </Stack>

      </ThemeProvider>
    </>
  )
}

export default App
