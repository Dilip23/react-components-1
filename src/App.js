import { useState } from "react";
import "./styles.css";

const App = () => {
  const [state, setState] = useState({
    number1: "",
    number2: ""
  });
  const [result, setResult] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const onInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleOperation = (operation) => {
    let { number1, number2 } = state;
    number1 = parseInt(number1, 10);
    number2 = parseInt(number2, 10);

    let result;
    if (operation === "add") {
      result = number1 + number2;
    } else if (operation === "subtract") {
      result = number1 - number2;
    }

    if (isNaN(result)) {
      setErrorMsg("Please enter valid numbers");
    } else {
      setErrorMsg("");
      setResult(result);
    }
  };

  return (
    <div>
      <div>
        <p>{errorMsg}</p>
        <label>First Number </label>
        <input
          type="text"
          name="number1"
          placeholder="Enter a number"
          value={state.number1}
          onChange={onInputChange}
        />
      </div>

      <div>
        <label>First Number </label>
        <input
          type="text"
          name="number2"
          placeholder="Enter a number"
          value={state.number2}
          onChange={onInputChange}
        />
      </div>

      <div>
        Result: <span>{result}</span>
      </div>

      <button onClick={() => handleOperation("add")}>Add</button>
      <button onClick={() => handleOperation("subtract")}>Subtract</button>
    </div>
  );
};
export default App;
