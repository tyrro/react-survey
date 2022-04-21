import Image from 'next/image';

export const alertTestIds = {
  base: 'alert',
  icon: 'alert__icon',
  title: 'alert__title',
  description: 'alert__description',
};

const Alert = ({ icon, title, description }) => {
  return (
    <div className="w-full bg-notification backdrop-blur-2.5xl flex p-4 rounded-xl" data-test-id={alertTestIds.base}>
      <div className="w-[30px] h-[30px]" data-test-id={alertTestIds.icon}>
        <Image src={icon} alt="alert" layout="fixed" width={30} height={30} />
      </div>
      <div className="text-white ml-4">
        <div className="text-base-small font-extrabold mb-2" data-test-id={alertTestIds.title}>
          {title}
        </div>
        <div className="text-white/60 text-base-xs" data-test-id={alertTestIds.description}>
          {description}
        </div>
      </div>
    </div>
  );
};

export default Alert;
