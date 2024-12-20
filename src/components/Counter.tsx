import { useState } from "react";
// import App from '../App'

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
}

export default Counter;
