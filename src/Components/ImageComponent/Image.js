const Image = props => {
  return (
    <img
      lazy
      {...props.attributes}
      alt={props.alt}
      className={props.className}
    />
  );
};

export default Image;
