import React, { useState } from 'react';
import './App.css';
import { Exercise } from './components/Exercise';
import { exercises } from './Exercises';

function App() {
  const [exerciseIndex, setExerciseIndex] = useState(100000);
  const exerciseOver = () => {
    setExerciseIndex(exerciseIndex + 1);
  }
  const start = () => {
    setExerciseIndex(0);
  }
  return (
    <div className="App">
      <div className="App-content">
        {exerciseIndex < exercises.length
          ?
          <Exercise
            key={exerciseIndex}
            Description={exercises[exerciseIndex].description}
            Time={exercises[exerciseIndex].time}
            ExerciseOver={exerciseOver} />
          :
          <div>
            <h1>You are awesome! </h1>
            <h1>Have a great day :)</h1>
            <button onClick={start} className="Start-button">Start</button>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
