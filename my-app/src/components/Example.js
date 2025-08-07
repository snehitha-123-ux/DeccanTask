import React, { useEffect } from "react";

function Greeting() {
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("Hello, Ali!");
    }, 2000);

    // Cleanup to stop the interval when component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return <div>Check your console—“Hello, Ali!” should appear every 2 seconds.</div>;
}

export default Greeting;

