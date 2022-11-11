import React from 'react';

const Button = props => {
  return (
    <React.Fragment>
      <button
        lazy={true}
        disabled={props.disabled}
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
