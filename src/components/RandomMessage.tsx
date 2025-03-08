import React from 'react';

const RandomMessage: React.FC = () => {
  const messages = ['Fun', 'Cool', 'Wow'];
  const randomIndex = Math.floor(Math.random() * messages.length);
  return <h2>{messages[randomIndex]} React</h2>;
};

export default RandomMessage;