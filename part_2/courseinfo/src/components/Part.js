import React from "react";

const Part = ({ part }) => {
  return part.map((part) => (
    <p key={part.id} >
      {part.name} {part.exercises}
    </p>
  ));
};

export default Part;