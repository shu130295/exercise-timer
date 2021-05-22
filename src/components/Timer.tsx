import React, { useEffect, useState } from 'react';

export interface TimerProps {
  duration: number;
  setTimeUp: any;
}

export const Timer = (props: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState(props.duration);
  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(timeLeft => timeLeft - 1);
    }, 1000);
    if(timeLeft === 0) {
      props.setTimeUp(true);
    }
  });
  return <div className="Timer">{timeLeft} s</div>
}