import UseProps from "./UseProps";
import UseEffect from "./UseEffect";
import "./index.css";

function App() {
  const charData = "A";
  const varcharData = "Lance Bryan";
  const integerData = 25;
  const floatData = 1.2323232;
  const booleanData = true;

  return (
    <div className="app-container">
      <h1>Agenda 1 and Agenda 3</h1>

      {/* Agenda 1: Props */}
      <UseProps
        char={charData}
        varchar={varcharData}
        integer={integerData}
        float={floatData}
        booleanValue={booleanData}
      />

      {/* Agenda 3: useEffect Counter */}
      <UseEffect />
    </div>
  );
}

export default App;
