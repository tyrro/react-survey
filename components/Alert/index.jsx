import Image from 'next/image';

export const alertTestIds = {
  icon: 'alert-icon',
  title: 'alert-title',
  description: 'alert-description',
};

const Alert = ({ icon, title, description }) => {
  return (
    <div className="w-full bg-notification backdrop-blur-2.5xl flex p-4 rounded-xl">
      <span className="ml-1 mt-1" data-test-id={alertTestIds.icon}>
        <Image src={icon} alt="alert" layout="fixed" width={22.38} height={22.45} />
      </span>
      <div className="text-white ml-5">
        <div className="text-base-small font-extrabold mb-2" data-test-id={alertTestIds.title}>
          {title}
        </div>
        <div className="text-base-xs" data-test-id={alertTestIds.description}>
          {description}
        </div>
      </div>
    </div>
  );
};

export default Alert;
