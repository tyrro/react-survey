import Link from 'next/link';

import useUser from 'lib/useUser';
import { clearToken } from 'helpers/authentication';

const Sidebar = ({ name }) => {
  const { mutateUser } = useUser({
    redirectTo: '/login',
  });

  const handleOnClick = async event => {
    event.preventDefault();
    mutateUser(clearToken());
  };

  return (
    <div className="fixed bg-sidebar backdrop-blur-4xl right-0 w-[264px] pl-8 pt-8 pr-8 h-full">
      <div className="text-white text-base-xxl font-extrabold mb-[22px]">{name}</div>
      <hr className="border-solid rounded-[0.5px] border-white/20 mb-[35px]" />
      <Link href="/logout">
        <a className="text-white/50 text-base-xl" onClick={handleOnClick}>
          Logout
        </a>
      </Link>
    </div>
  );
};

export default Sidebar;
