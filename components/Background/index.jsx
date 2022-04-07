import Image from 'next/image';
import PropTypes from 'prop-types';

export const backgroundTestIds = {
  foregroundChildren: 'foreground-children',
};

const Background = ({ imagePath, children }) => {
  return (
    <div className="h-screen w-screen">
      <Image alt="background" src={imagePath} layout="fill" objectFit="cover" quality={100} />
      <div className="h-full backdrop-blur-5xl bg-shadow" data-test-id={backgroundTestIds.foregroundChildren}>
        {children}
      </div>
    </div>
  );
};

Background.propTypes = {
  imagePath: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Background;
