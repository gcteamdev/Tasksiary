import React from 'react';

const Task = ({ name, assign, date }) => {
  return (
    <div className="card bg-dark text-white p-5 m-2 rounded">
      <h2> {name}</h2>
      <h6>{date}</h6>
      <h6 className="text-primary">{assign}</h6>
    </div>
  );
};

export default Task;
