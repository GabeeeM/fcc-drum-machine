import { useState, useEffect } from "react";
import './App.css';

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
];

function App() {
  const [sound, setSound] = useState("");

  return (
    <div className="App" id="drum-machine">
      <header className="App-header">
        <h1>Drum Machine</h1>
        <h2 id="display">{sound}</h2>
        <div className="buttons">
        {bankOne.map(clip => (
          <Pad clip={clip} key={clip.id} setSound={setSound} />
        ))}
        </div>
      </header>
    </div>
  );
}

function Pad({clip, setSound}) {

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("keydown", handleKey);
    }
  }, [])
  
  const handleKey = (e) => {
    if(e.keyCode === clip.keyCode) {
      playSound();
      setSound(clip.keyTrigger);
    }
  }

  const playSound = () => {
    const audioTag = document.getElementById(clip.keyTrigger)
    audioTag.currentTime = 0;
    audioTag.play();
  }

  return (
    <div onClick={playSound} id={clip} className="drum-pad btn btn-secondary p-4 m-3">
      <audio src={clip.url} id={clip.keyTrigger} className="clip"/>
      {clip.keyTrigger}
    </div>
  );
}

export default App;
