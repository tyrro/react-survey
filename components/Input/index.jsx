import PropTypes from 'prop-types';

const Input = ({ id, className, ...attributes }) => {
  const DEFAULT_CLASS_NAMES =
    'w-full h-full bg-dark text-white text-base-large rounded-xl px-3 pt-[19px] pb-[15px] focus:outline-none focus:shadow-none';

  return <input className={`${DEFAULT_CLASS_NAMES} ${className}`} id={id} {...attributes} />;
};

Input.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  className: PropTypes.string,
};

export default Input;
