import Image from 'next/image';

export const backgroundTestIds = {
  foregroundChildren: 'foreground-children',
};

const Background = ({ imagePath, children }) => {
  return (
    <div className="h-screen w-screen">
      <Image alt="background" src={imagePath} layout="fill" objectFit="cover" quality={100} />
      <div className="h-full backdrop-blur-3xl bg-shadow" data-test-id={backgroundTestIds.foregroundChildren}>
        {children}
      </div>
    </div>
  );
};

export default Background;
