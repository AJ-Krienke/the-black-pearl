import React from 'react';

const Button = props => {
  return (
    <React.Fragment>
      {/* Return a semantic button element */}
      <button
        // ensure attributes are passed from props
        {...props}
        onClick={props.onClick}
        className={props.className}
        type={props.type}
      >
        {props.text || props.children}
      </button>
    </React.Fragment>
  );
};

export default Button;
