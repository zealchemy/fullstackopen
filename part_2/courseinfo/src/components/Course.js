import React from "react";
import Header from "./Header";
import Total from "./Total";
import Part from "./Part";

  
  const Content = ({ course }) => {
    return (
      <div>        
        <Part part={course.parts} />
      </div>
    );
  };


const Course = ({course}) => {

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default Course;
