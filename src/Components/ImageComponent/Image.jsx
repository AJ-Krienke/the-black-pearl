const Image = props => {
  return (
    // Export semantic image
    <img
      // Ensure that attributes are applied
      // default all images to lazy loading
      loading={props.loading || 'lazy'}
      {...props}
      src={props.src}
      alt={props.alt}
      className={props.className}
    />
  );
};

export default Image;
