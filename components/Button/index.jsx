import PropTypes from 'prop-types';

export const SIZE_CLASSES = {
  small: 'h-10',
  large: 'h-14',
};

const Button = ({ size, dark = false, className, children, ...attributes }) => {
  const sizeClass = SIZE_CLASSES[size];
  const backgroundClass = dark ? 'bg-dark text-white' : 'bg-white';

  return (
    <button
      className={`text-base-large font-extrabold rounded-[10px] w-full ${className} ${sizeClass} ${backgroundClass}`}
      {...attributes}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(['small', 'large']).isRequired,
  dark: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
