import React, { useEffect, useState } from "react";
/* eslint import/no-webpack-loader-syntax:0 */
// @ts-ignore
import worker from "workerize-loader!./worker"; 
/* eslint import/no-webpack-loader-syntax:0 */
// @ts-ignore
import timer from "workerize-loader!./timer"; // eslint-disable-line import/no-webpack-loader-syntax

const Test: React.FunctionComponent<any> = () => {
  const [found, setFound] = useState([]);

  const [time, setTime] = useState(0);
  const workerInstance = worker();
  const timerInstance = timer();

  useEffect(() => {
    workerInstance.fetchJson();
    timerInstance.timer();
  }, []);

  useEffect(() => {
    workerInstance.addEventListener("message", async (message:any) => {
      if (message.data.type === "done") {
        timerInstance.terminate();
        workerInstance.terminate();
      }
      setFound(message.data);
    });
  }, [worker]);

  useEffect(() => {
    timerInstance.addEventListener("message", (message:any) => {
      if (typeof message.data === "number") {
        setTime(message.data);
      }
    });
  }, [timer]);

  // @ts-ignore
  if (found.type!=='done'){
 return (<p>{time} secs</p>)
}


// @ts-ignore
return (found.results.map(({firstName,lastName})=><p>{firstName},{lastName}</p>))
};

export default Test;
