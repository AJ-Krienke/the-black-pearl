import React from 'react';

const Button = props => {
  return (
    <React.Fragment>
      <button
        lazy
        {...props}
        className={props.className}
        type={props.type}
      >
        {props.text}
      </button>
    </React.Fragment>
  );
};

export default Button;
