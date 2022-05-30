import PropTypes from 'prop-types';

import Image from '@/components/Image';

export const backgroundTestIds = {
  image: 'background-image',
  foregroundChildren: 'foreground-children',
};

const Background = ({ imagePath, children }) => {
  return (
    <div className="relative h-screen w-screen">
      {imagePath === '' ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src=""
          alt="dark background"
          className="absolute min-w-full min-h-full bg-black"
          sizes="100vw"
          data-test-id={backgroundTestIds.image}
        />
      ) : (
        <Image
          src={imagePath}
          alt="background"
          layout="fill"
          objectFit="cover"
          quality={100}
          data-test-id={backgroundTestIds.image}
        />
      )}
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
