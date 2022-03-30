import Image from 'next/image';
import { useRouter } from 'next/router';

import backButton from '@/public/angle-left.svg';

export const backButtonTestIds = {
  button: 'back-button',
};

const BackButton = () => {
  const router = useRouter();

  return (
    <div className="cursor-pointer" data-test-id={backButtonTestIds.button} onClick={() => router.back()}>
      <Image src={backButton} alt="back" />
    </div>
  );
};

export default BackButton;
