import { useState } from 'react';
import '../css/Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('Result will be displayed here ;)');

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleBackspace = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const handleClear = () => {
    setInput('');
    setResult('Result will be displayed here ;)');
  };

  const handleCalculate = () => {
    try {
      let evalInput = input.replace(/√/g, 'Math.sqrt');
      evalInput = evalInput.replace(/Math\.sqrt\(([^()]+)\)/g, (match, p1) => `Math.sqrt(${p1})`);
      
      // Evaluate the expression using eval
      const evalResult = eval(evalInput);
      if (!isFinite(evalResult)) throw new Error('Math error');
      setResult("Answer: " + evalResult);
    } catch (error) {
      setResult('Error ! Please Enter Valid Expression');
    }
  };

  return (
    <div className="calculator">
      <h2 style={{textAlign: 'center'}}>|| Basic Calculator ||</h2>
      <div className="display">
        <input type="text" value={input}  onChange={(e) => setInput(e.target.value)} placeholder='Enter Expression Here...'/>
        <div className="result">{result}</div>
      </div>
        <hr />
      <div className="buttons">
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
