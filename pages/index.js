import { useState } from "react";

export default function Hello() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Hello! {counter}</h1>
      <button onClick={() => setCounter((p) => p + 1)}>+</button>
    </div>
  );
}
