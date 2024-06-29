import React from 'react';

import './Card.css';

const Card = (props) => {
  const classes = 'card ' + props.className;
  return <div className={classes}> {props.children}</div>; // yahape props.children isiliye use hua hai taaki ye hmare component k andar likh ske 
  // aur className={classes} isilie use hui h taaki classes normally kre that is ki apne nearest element ki classes apply ho
};

export default Card;