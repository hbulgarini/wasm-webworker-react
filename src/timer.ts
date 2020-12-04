/* eslint-disable no-restricted-globals */
export const timer = () => {
  let i = 0;
  function timedCount() {
    setInterval(() => {
      i++;

      // @ts-ignore
      postMessage(i);
    }, 1000);
  }

  timedCount();
};
