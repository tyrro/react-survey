import PropTypes from 'prop-types';

const Input = ({ id, type, dataTestId, required, className }) => (
  <input
    className={`w-full h-full bg-dark text-white text-base-large rounded-xl px-3 pt-[19px] pb-[15px] focus:outline-none focus:shadow-none ${className}`}
    id={id}
    data-test-id={dataTestId}
    type={type}
    required={required}
  />
);

Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  dataTestId: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Input;
