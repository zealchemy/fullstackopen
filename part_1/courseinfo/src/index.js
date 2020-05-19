import React from 'react';
import ReactDOM from 'react-dom';


const Header = (props) => {
  
  return (
  <div>
  <h1>{props.course.name}</h1>
  </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part1}  {props.exercises1}
        </p>
        <p>
          {props.part2}  {props.exercises2}
        </p>
        <p>
          {props.part3}  {props.exercises3}
        </p>
    </div>
  )
}
const Content = (props) => {
  return (
  <div>
    <Part part1={props.course.parts[0].name} exercises1={props.course.parts[0].exercises1} />
    <Part part2={props.course.parts[1].name} exercises2={props.course.parts[1].exercises2} />
    <Part part3={props.course.parts[2].name} exercises3={props.course.parts[2].exercises3} />
  </div>
  )
}
const Total = (props) => {
  
  return (
  <div>
  <p>Number of exercises {props.course.parts[0].exercises1 + props.course.parts[1].exercises2 + props.course.parts[2].exercises3}</p>
  </div>
  )
}

const App = () => {
  const course ={
  name : 'Half Stack application development',
  parts: [
    {
      name: 'Fundamentals of React',
      exercises1 : 10
    },
    {
      name: 'Using props to pass data',
      exercises2 : 7
    } ,
    { 
      name:'State of a component',
      exercises3: 14
    }
  ]
} 
  
  return (
    <div>    
    
    <Header course={course} />
    <Content course={course} />
    <Total course={course} />
    
    </div>

  )
}

ReactDOM.render(<App />, document.getElementById('root'))