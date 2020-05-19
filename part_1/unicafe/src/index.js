import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = ({ onClick, text }) => {
  return (
    <div>
      <button onClick={onClick}> {text} </button>
    </div>
  );
};

const Statistic = ({ text, value }) => {
  return (
    <div>
      <table>
        <tbody>
        <tr>
          <td>{text} {value}</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

const Statistics = ({ good, bad, neutral }) => {
  const totalStuff = good + bad + neutral;
  let averageStuff = (good - bad) / totalStuff;

  const positiveStuff = (good * 100) / totalStuff;

  if (totalStuff !== 0) {
    return (
      <div>
        <h3>Statistics</h3>
        <Statistic text="Good" value={good} />
        <Statistic text="Neutral" value={neutral} />
        <Statistic text="Bad" value={bad} />
        <Statistic text="All" value={totalStuff} />
        <Statistic text="Average" value={averageStuff} />
        <Statistic text="Positive" value={positiveStuff} />
      </div>
    );
  }

  return (
    <div>
      <h3>No feedback given</h3>
    </div>
  );
};
const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodStuff = () => setGood(good + 1);
  const neutralStuff = () => setNeutral(neutral + 1);
  const badStuff = () => setBad(bad + 1);

  // const totalStuff=()=>{
  //   let total = good+bad+neutral
  //   return total
  // }
  const totalStuff = good + bad + neutral;
  let averageStuff = (good - bad) / totalStuff;

  const positiveStuff = (good * 100) / totalStuff;

  // const averageStuff=() => {
  //   let theTotal = totalStuff()
  //   let average = theTotal / 3
  //   return average
  // }

  return (
    <div>
      <h2>Give feedback</h2>

      <Button onClick={goodStuff} text="good" />
      <Button onClick={neutralStuff} text="neutral" />
      <Button onClick={badStuff} text="bad" />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
