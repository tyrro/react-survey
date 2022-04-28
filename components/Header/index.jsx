import { useState } from 'react';

import Image from '@/components/Image';
import Sidebar from '@/components/Sidebar';
import logo from '@/public/logo-small.svg';

import useUser from 'hooks/useUser';
import useProfile from 'hooks/useProfile';

export const headerTestIds = {
  base: 'header',
  logo: 'header__logo',
  userAvatar: 'header__user-avatar',
};

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user } = useUser();
  const profile = useProfile(user);

  if (!profile) {
    return null;
  }

  return (
    <div className="flex justify-between mb-[42px]" data-test-id={headerTestIds.base}>
      <div className="h-8 ml-8 mt-[34px]" data-test-id={headerTestIds.logo}>
        <Image src={logo} alt="logo" />
      </div>
      <div
        className="w-9 h-9 mt-8 mr-8 z-[1] cursor-pointer"
        onClick={() => setIsSidebarOpen(value => !value)}
        data-test-id={headerTestIds.userAvatar}
      >
        <Image className="rounded-full" src={profile.avatarUrl} alt="profile avatar" layout="fixed" width={36} height={36} />
      </div>
      {isSidebarOpen && <Sidebar name={profile.name} />}
    </div>
  );
};

export default Header;
