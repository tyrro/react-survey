import PropTypes from 'prop-types';

export const SIZE_CLASSES = {
  xs: 'w-[90px] h-10',
  small: 'w-30 h-14',
  medium: 'w-80 h-14',
  large: 'w-[327px] h-14',
  huge: 'w-176 h-14',
};

const Button = ({ size, dark = false, children, ...attributes }) => {
  const sizeClass = SIZE_CLASSES[size];
  const backgroundClass = dark ? 'bg-dark' : 'bg-white';

  return (
    <button className={`text-base-large font-extrabold rounded-[10px] ${sizeClass} ${backgroundClass}`} {...attributes}>
      {children}
    </button>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(['xs', 'small', 'medium', 'large', 'huge']).isRequired,
  dark: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Button;
