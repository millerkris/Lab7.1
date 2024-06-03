import React from 'react';

const Square = ({ n }) => {
  const squareOfN = n * n;

  return (
    <div>
      <p>{`${n} в квадрате равно ${squareOfN}`}</p>
    </div>
  );
};

export default Square;