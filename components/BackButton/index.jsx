import { useRouter } from 'next/router';

import Image from '@/components/Image';
import angleLeftIcon from '@/public/angle-left.svg';

export const backButtonTestIds = {
  button: 'back-button',
};

const BackButton = () => {
  const router = useRouter();

  return (
    <div className="w-7 h-[30px] cursor-pointer" data-test-id={backButtonTestIds.button} onClick={() => router.back()}>
      <Image src={angleLeftIcon} alt="back" />
    </div>
  );
};

export default BackButton;
