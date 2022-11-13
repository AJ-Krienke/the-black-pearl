import React from 'react';

const Button = props => {
  return (
    <React.Fragment>
      <button
        {...props}
        className={props.className}
        type={props.type}
      >
        {props.text || props.children}
      </button>
    </React.Fragment>
  );
};

export default Button;
