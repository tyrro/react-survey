import Link from 'next/link';

import useUser from 'lib/useUser';
import fetchJson from 'lib/fetchJson';

const Sidebar = ({ name }) => {
  const { mutateUser } = useUser({
    redirectTo: '/login',
  });

  const handleOnClick = async event => {
    event.preventDefault();

    try {
      mutateUser(await fetchJson('/api/logout', { method: 'POST' }));
    } catch (error) {
      console.error('An unexpected error happened:', error);
    }
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
