import React, { useState } from 'react';
import { Description } from '../components/Description';
import { Timer } from '../components/Timer';

export interface ExerciseProps {
  Description: string,
  Time: number,
  ExerciseOver: any
}

export const Exercise = (props: ExerciseProps) => {
  const [exerciseTimeUp, setExerciseTimeUp] = useState(false);
  const [restTimeUp, setRestTimeUp] = useState(false);
  if(!exerciseTimeUp) {
    const startAudio = new Audio('start.mp3');
    startAudio.play();
    return (
      <>
        <Timer duration={props.Time} setTimeUp={setExerciseTimeUp} key="exercise"/>
        <Description text={props.Description} />
      </>
    );
  }
  if(exerciseTimeUp && !restTimeUp) {
    const andItsDoneAudio = new Audio('andItsDone.mp3');
    andItsDoneAudio.play();
    return (
      <>
        <Timer duration={15} setTimeUp={setRestTimeUp} key="rest"/>
        <Description text="Next one coming..." />
      </>
    );
  }
  if (exerciseTimeUp && restTimeUp) {
    props.ExerciseOver();
  }
  return <>I am default</>;
}