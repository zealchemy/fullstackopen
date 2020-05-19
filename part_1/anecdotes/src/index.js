import React, { useState } from "react";
import ReactDOM from "react-dom";

// const Votes = ({anecdotes}) =>{

//   const myAnecdote=new Array(anecdotes.length+1).join('0').split('').map(parseFloat)
//   console.log(myAnecdote)

//   return(
//     <div>has 2 votes</div>
//   )

// }

const App = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const myAnecdote = new Array(anecdotes.length + 1)
    .join("0")
    .split("")
    .map(parseFloat);
  const [votes, setVote] = useState(myAnecdote);

  const rand = () => setSelected(Math.floor(Math.random() * anecdotes.length));

  const addVote = () => {
    const newAnecdote = [...votes];
    newAnecdote[selected] += 1;
    setVote(newAnecdote);
  };

  const maxVote = (votes) => {
    const newVotes = Math.max(...votes);
    console.log(newVotes)
    const maxVotes = votes.indexOf(newVotes);
    return maxVotes;
  };
  return (
    <div>
      <h1>Anecdote Of The Day</h1>

      <h4>{anecdotes[selected]}</h4>
      <div>has {votes[selected]} votes</div>

      <button onClick={addVote}>vote</button>
      <button onClick={rand}>next anecdote</button>

      <div>
        <h1>Anecdote with most votes</h1>
        <h4>{anecdotes[maxVote(votes)]}</h4>
        <p>has {votes[maxVote(votes)]} votes</p>
      </div>
    </div>
  );
};

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"));
