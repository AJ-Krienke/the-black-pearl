const Image = props => {
  return (
    <img
      lazy={true}
      src={props.src}
      {...props.attributes}
      alt={props.alt}
      className={props.className}
    />
  );
};

export default Image;
