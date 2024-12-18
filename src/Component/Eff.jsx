import { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    // const intervalId = setInterval(() => {
    //   setTime(new Date().toLocaleTimeString());
    // }, 1000);

    const intervalId = setInterval(() => {
        setTime(new DataView().toLocaleTimeString());
    },[])

    return () => setInterval(intervalId);
  }, []);

  return <div>{time}</div>;
}

export default Timer;
