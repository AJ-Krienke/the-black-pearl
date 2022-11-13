const Image = props => {
  return (
    <img
      loading={props.loading || 'lazy'}
      {...props}
      src={props.src}
      alt={props.alt}
      className={props.className}
    />
  );
};

export default Image;
