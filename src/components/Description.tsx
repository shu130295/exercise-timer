import React from 'react';

export interface DescriptionProps {
  text: string;
}

export const Description = (props: DescriptionProps) => {
  return <div className="Description">{props.text}</div>
}