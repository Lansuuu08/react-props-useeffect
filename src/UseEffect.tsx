import { useState, useEffect } from "react";

function UseEffect() {
  const [count, setCount] = useState<number>(0);

  // Runs whenever "count" changes
  useEffect(() => {
    console.log("Counter changed:", count);
  }, [count]);

   return (
    <div className="card counter-card">
      <h3>useEffect Counter</h3>
      <p className={count % 2 === 0 ? "counter-even" : "counter-odd"}>{count}</p>
      <div className="button-group">
        <button className="increment-btn" onClick={() => setCount(count => count + 1)}>Increment</button>
        <button className="decrement-btn" onClick={() => setCount(count => count - 1)}>Decrement</button>
      </div>
    </div>
  );
}

export default UseEffect;
