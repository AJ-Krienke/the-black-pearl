import React from 'react';

const Button = props => {
  return (
    <React.Fragment>
      <button
        {...props.attributes}
        className={props.className}
        type={props.type}
      >
        {props.text}
      </button>
    </React.Fragment>
  );
};

export default Button;