// import logo from './logo.svg';
// import './App.css';



import {useState} from 'react';

function App() {
  const[Calculation, setCalculation] = useState("");
  const [Answer, setAnswer] = useState("");

  const ops = ['/','*','+','-','.'];

  const updateCalculation =  Value => {
    if(ops.includes(Value) && Calculation === '' || ops.includes(Value) && ops.includes(Calculation.slice(-1)))
    {
      return;
    }
    setCalculation(Calculation + Value);

    if(!ops.includes(Value))
    {
      setAnswer(eval(Calculation + Value).toString());
    }
  }


const CreateNumbers = () => {
  const Num = [];

  for(let i = 1; i < 10; i++)
  {
    Num.push(
      <button onClick={() => updateCalculation(i.toString())}Numkey={i}>{i}</button>
    )
  }
  return Num;
}


  // const Calculate = () => {setCalculation}
  // {
  //   setCalculation(eval(Calculation).toString());
   
  // }
  const finalAns = () => {
    setCalculation(eval(Calculation).toString());
  }



const deleteLastDigit = () =>{
  if(setCalculation == ''){
    return;
  }

const Value = Calculation.slice(0,-1);
setCalculation(Value);

}


  return (
    <div className="App">
      <div className = "calculator">
        <div className = "display">
          {Answer ? <span>({Answer})</span> : ''}
          {Calculation || "0"}
        </div>

        <div className = "operators">
          <button onClick={() => updateCalculation('/')}>/</button>
          <button onClick={() => updateCalculation('+')}>+</button>
          <button onClick={() => updateCalculation('-')}>-</button>
          <button onClick={() => updateCalculation('*')}>*</button>

          <button onClick = {deleteLastDigit}>DELETE</button>
        </div>
        <div className = "Digits">
          {CreateNumbers()}
          <button onClick={() => updateCalculation('0')}>0</button>
          <button onClick={() => updateCalculation('.')}>.</button>
          <button onClick = {finalAns}>=</button>
        </div>


      </div>
    </div>
  );
}

export default App;
