import Image from 'next/image';
import PropTypes from 'prop-types';

const Icon = ({ src, alt, ...attributes }) => <Image src={src} alt={alt} {...attributes} />;

Icon.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  alt: PropTypes.string.isRequired,
};

export default Icon;
