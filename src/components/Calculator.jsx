import { useState } from 'react';
import '../css/Calculator.css';

// Calculator component for basic arithmetic operations
const Calculator = () => {
  const [input, setInput] = useState(''); // State variable to store the input expression
  const [result, setResult] = useState('Result will be displayed here ;)'); // State variable to store the result of the expression

  // Function to handle button click event
  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value); // Append the clicked button value to the input expression
  };

  // Function to handle backspace event
  const handleBackspace = () => {
    setInput((prevInput) => prevInput.slice(0, -1)); // Remove the last character from the input expression
  };

  // Function to handle clear event
  const handleClear = () => {
    setInput(''); // Clear the input expression
    setResult('Result will be displayed here ;)'); // Reset the result display
  };

  // Function to handle calculate event
  const handleCalculate = () => {
    try {
      // Replace '√' with 'Math.sqrt' in the input expression for evaluation
      let evalInput = input.replace(/√/g, 'Math.sqrt');
      // Add support for nested sqrt() calls or multiple sqrt() in the expression
      evalInput = evalInput.replace(/Math\.sqrt\(([^()]+)\)/g, (match, p1) => `Math.sqrt(${p1})`);

      // Evaluate the expression using eval
      const evalResult = eval(evalInput);
      if (!isFinite(evalResult)) throw new Error('Math error');
      setResult("Answer: " + evalResult); // Set the result state with the evaluated result
    } catch (error) {
      setResult('Error ! Please Enter Valid Expression'); // Display error message for invalid expressions
    }
  };

  return (
    <div className="calculator">
      <h2 style={{textAlign: 'center'}}>|| Basic Calculator ||</h2>
      <div className="display">
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder='Enter Expression Here...'
        />
        <div className="result">{result}</div>
      </div>
      <hr />
      <div className="buttons">
        {/* Buttons for digits 0 to 9 */}
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={() => handleButtonClick('(')}>(</button>
        <button onClick={() => handleButtonClick(')')}>)</button>
        <button onClick={() => handleButtonClick('√(')}>√</button>
        <button onClick={() => handleButtonClick('%')}>%</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
        <button onClick={handleCalculate}>=</button>
        <button onClick={handleClear}>Clear</button>
        <button onClick={handleBackspace}>Backspace</button>
      </div>
    </div>
  );
};

export default Calculator;
