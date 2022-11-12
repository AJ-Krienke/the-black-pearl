const Image = props => {
  return (
    <img
      lazy='true'
      {...props}
      src={props.src}
      alt={props.alt}
      className={props.className}
    />
  );
};

export default Image;
