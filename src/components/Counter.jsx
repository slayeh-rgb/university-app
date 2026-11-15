import { useState } from "react";

// Version avec useState (temporaire, pour la démonstration du cours)
export const Counter = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    console.log(count);
  }

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={handleClick}>Increment</button>
    </>
  );
};
