import Image from 'next/image';

const Background = ({ imagePath, children }) => {
  return (
    <div className="h-screen w-screen">
      <Image alt="background" src={imagePath} layout="fill" objectFit="cover" quality={100} />
      <div
        className="h-full backdrop-blur-3xl bg-shadow flex flex-col justify-center items-center"
        data-test-id="foreground-children"
      >
        {children}
      </div>
    </div>
  );
};

export default Background;
