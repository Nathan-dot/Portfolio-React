import React from "react";
import { useState, useEffect } from "react";

const AgeTracker = () => {
    const [age, setAge] = useState(0);

    useEffect(() => {
      const intervalId = setInterval(() => {
        const birthDate = new Date(1060902506728);
        const currentDate = new Date();
        const time =
          (currentDate - birthDate) / (1000 * 60 * 60 * 24 * 365.25); // milliseconds per year
        setAge(time.toFixed(9));
      }, 50);

    return () => clearInterval(intervalId);
    }, []);

     return <span id="age">{age}</span>;
}

export default AgeTracker;