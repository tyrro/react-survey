import PropTypes from 'prop-types';

const Button = ({ type, size, dark, children, dataTestId }) => {
  const SIZE_CLASSES = {
    xs: 'w-[90px] h-10',
    small: 'w-30 h-14',
    medium: 'w-80 h-14',
    large: 'w-[327px] h-14',
    huge: 'w-176 h-14',
  };

  const sizeClass = SIZE_CLASSES[size];
  const backgroundClass = dark ? 'bg-dark' : 'bg-white';

  return (
    <button
      className={`text-base-large font-extrabold rounded-[10px] ${sizeClass} ${backgroundClass}`}
      data-test-id={dataTestId}
      type={type}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
  size: PropTypes.oneOf(['xs', 'small', 'medium', 'large', 'huge']).isRequired,
  dark: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  dataTestId: PropTypes.string.isRequired,
};

export default Button;
