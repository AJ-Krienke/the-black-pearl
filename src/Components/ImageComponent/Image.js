const Image = props => {
  return (
    <img
      {...props.attributes}
      lazy
      src={props.src}
      alt={props.alt}
      className={props.className}
    />
  );
};

export default Image;
