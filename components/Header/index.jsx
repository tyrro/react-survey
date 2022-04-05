import Image from 'next/image';
import { useState } from 'react';

import Sidebar from '@/components/Sidebar';

import logo from '@/public/logo-small.svg';

const Header = ({ name, avatarUrl }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex justify-between mb-[42px]">
      <div className="h-8 ml-8 mt-[34px]">
        <Image src={logo} alt="logo" />
      </div>
      {avatarUrl && (
        <div className="w-9 h-9 mt-8 mr-8 z-[1] cursor-pointer">
          <Image
            src={avatarUrl}
            alt="profile avatar"
            layout="fixed"
            width={36}
            height={36}
            onClick={() => setIsSidebarOpen(value => !value)}
          />
        </div>
      )}
      {isSidebarOpen && <Sidebar name={name} />}
    </div>
  );
};

export default Header;
