import Image from 'next/image';
import { useRouter } from 'next/router';

import backButton from '@/public/back-button.svg';

export const backButtonTestIds = {
  button: 'back-button',
};

const BackButton = () => {
  const router = useRouter();

  return (
    <span className="h-[20.5px] cursor-pointer" data-test-id={backButtonTestIds.button} onClick={() => router.back()}>
      <Image src={backButton} alt="back" height={20.5} />
    </span>
  );
};

export default BackButton;
