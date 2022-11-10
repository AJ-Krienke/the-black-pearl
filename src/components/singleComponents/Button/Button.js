import React from 'react';

const Button = props => {
  return (
    <React.Fragment>
      <button type={props.type || 'submit'}>{props.text}</button>
    </React.Fragment>
  );
};

export default Button;
