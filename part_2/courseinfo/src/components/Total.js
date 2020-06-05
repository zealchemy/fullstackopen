import React from "react";

const Total = ({course}) => {

    const total = course.parts.reduce((a,b)=>{
        
        return a+b.exercises
    },0);
return <p>Total of {total} exercises</p>;
};

export default Total;