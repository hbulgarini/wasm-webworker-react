import React, { useEffect, useState } from 'react';
import Results from '../Results';
import ProcessTimer from '../ProcessTimer';
import type { Match } from '../types';
/* eslint import/no-webpack-loader-syntax:0 */
// @ts-ignore
import reader from 'workerize-loader!../../workers/reader';
// @ts-ignore
import timer from 'workerize-loader!../../workers/timer';

const emptyMatch = {
  type: 'initial',
  results: [],
};

export const UsersList = () => {
  const [matched, setMatches] = useState<Match>(emptyMatch);

  const [time, setTime] = useState(0);
  const readerInstance = reader();
  const timerInstance = timer();

  useEffect(() => {
    readerInstance.fetchJson();
    timerInstance.timer();
  }, []);

  useEffect(() => {
    readerInstance.addEventListener('message', async (message: MessageEvent) => {
      if (message.data.type === 'done') {
        timerInstance.terminate();
        readerInstance.terminate();
      }
      setMatches(message.data);
    });
  }, [reader]);

  useEffect(() => {
    timerInstance.addEventListener('message', (message: MessageEvent) => {
      if (typeof message.data === 'number') {
        setTime(message.data);
      }
    });
  }, [timer]);

  if (matched.type !== 'done') {
    return <ProcessTimer time={time} />;
  }

  if (matched.results.length) {
    return <Results results={matched.results} />;
  }

  return null;
};

export default UsersList;
