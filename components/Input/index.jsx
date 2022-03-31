import PropTypes from 'prop-types';

const Input = ({ id, className, ...attributes }) => (
  <input
    className={`w-full h-full bg-dark text-white text-base-large rounded-xl px-3 pt-[19px] pb-[15px] focus:outline-none focus:shadow-none ${className}`}
    id={id}
    {...attributes}
  />
);

Input.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Input;
