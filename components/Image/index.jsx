import NextImage from 'next/image';
import PropTypes from 'prop-types';

const Image = ({ src, alt, ...attributes }) => <NextImage src={src} alt={alt} {...attributes} />;

Image.propTypes = {
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  alt: PropTypes.string.isRequired,
};

export default Image;
