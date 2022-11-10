const Image = props => {
  return (
    <img
      {...props.attributes}
      alt={props.alt}
      className={props.className}
    />
  );
};

export default Image;
