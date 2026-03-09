import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <><h1>** current Time Zone of India**</h1>
      <h2>
        This is Currrent Time:{time.toLocaleDateString()}-{" "}
        {time.toLocaleTimeString()}
      </h2>
    </>
  );
};

export default CurrentTime;
