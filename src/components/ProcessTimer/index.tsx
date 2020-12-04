import React from 'react';
type Props = {
  time: number;
};

export function ProcessTimer({ time }: Props) {
  return <p>Current reading timer: {time} secs.</p>;
}

export default ProcessTimer;
