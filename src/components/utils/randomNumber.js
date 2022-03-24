import React from 'react';

const randomNumber = (from = 0, to) => {
  return Math.floor(Math.random() * to + 1);
};

export default randomNumber;
